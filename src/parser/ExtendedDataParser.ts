import log from "loglevel";

export type XDataValue = {
    code: number;
    value: any;
};

export type XDataSection = {
    values: XDataValue[];
    [key: string]: any;
};

export default class ExtendedDataParser {
    appName: string | null;
    appNameWarningShown: boolean;
    lastString: string | null;
    sectionStack: XDataSection[];
    failure: boolean;

    constructor() {
        this.appName = null;
        this.appNameWarningShown = false;
        this.lastString = null;
        this.sectionStack = [this._CreateSection()];
        this.failure = false;
    }

    /**
     * Feed next token.
     * @return True if new parser instance should be created for this token.
     */
    Feed(curr: { code: number; value: any }): boolean {
        if (!this.appName) {
            if (curr.code === 1001) {
                this.appName = curr.value;
                return false;
            }
            if (!this.appNameWarningShown) {
                this.appNameWarningShown = true;
                log.warn("XDATA section does not start with application name");
            }
            return false;
        }

        if (curr.code === 1001) {
            return true;
        }

        if (this.failure) {
            /* Ignore all the rest content in case of parsing failure. */
            return false;
        }

        if (curr.code === 1000) {
            if (this.lastString) {
                log.warn("XDATA section unused string: " + this.lastString);
            }
            this.lastString = curr.value;
            return false;
        }

        const curSection = this._currentSection;

        if (curr.code === 1002) {
            if (curr.value === "{") {
                if (!this.lastString) {
                    log.warn("Unnamed XDATA section encountered");
                    this.failure = true;
                    return false;
                }
                const newSection = this._CreateSection();
                curSection[this.lastString] = newSection;
                this.lastString = null;
                this.sectionStack.push(newSection);
                return false;
            }
            if (curr.value === "}") {
                if (this.sectionStack.length < 2) {
                    log.warn("Unmatched XDATA section closing");
                    this.failure = true;
                    return false;
                }
                this.sectionStack.pop();
                return false;
            }
            log.warn("Bad XDATA section control string encountered: " + curr.value);
            this.failure = true;
            return false;
        }

        if (this.lastString !== null) {
            curSection.values.push(this._CreateValue(1000, this.lastString));
            this.lastString = null;
        }

        curSection.values.push(this._CreateValue(curr.code, curr.value));

        return false;
    }

    /** Finalize XDATA section parsing. */
    Finish(entity: any): void {
        if (this.failure) {
            return;
        }
        if (this.appName) {
            let xdata: Record<string, any>;
            if (Object.prototype.hasOwnProperty.call(entity, "xdata")) {
                xdata = entity.xdata;
            } else {
                xdata = {};
                entity.xdata = xdata;
            }
            xdata[this.appName] = this.sectionStack[0];
        }
    }

    get _currentSection(): XDataSection {
        return this.sectionStack[this.sectionStack.length - 1];
    }

    _CreateSection(): XDataSection {
        return {
            values: []
        };
    }

    _CreateValue(code: number, value: any): XDataValue {
        return { code, value };
    }
}
