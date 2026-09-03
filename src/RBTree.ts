/** Based on bintrees package (https://github.com/vadimg/js_bintrees). Fixed web-worker support. */

export class Node<T> {
    data: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;
    red: boolean = true;

    constructor(data: T) {
        this.data = data;
    }

    get_child(dir: boolean | number): Node<T> | null {
        return dir ? this.right : this.left;
    }

    set_child(dir: boolean | number, val: Node<T> | null): void {
        if (dir) {
            this.right = val;
        } else {
            this.left = val;
        }
    }
}

export class TreeIterator<T> {
    _tree: TreeBase<T>;
    _ancestors: Node<T>[];
    _cursor: Node<T> | null;

    constructor(tree: TreeBase<T>) {
        this._tree = tree;
        this._ancestors = [];
        this._cursor = null;
    }

    data(): T | null {
        return this._cursor !== null ? this._cursor.data : null;
    }

    // if null-iterator, returns first node; otherwise, returns next node
    next(): T | null {
        if (this._cursor === null) {
            const root = this._tree._root;
            if (root !== null) {
                this._minNode(root);
            }
        } else {
            if (this._cursor.right === null) {
                let save: Node<T>;
                do {
                    save = this._cursor;
                    if (this._ancestors.length) {
                        this._cursor = this._ancestors.pop()!;
                    } else {
                        this._cursor = null;
                        break;
                    }
                } while (this._cursor.right === save);
            } else {
                this._ancestors.push(this._cursor);
                this._minNode(this._cursor.right);
            }
        }
        return this._cursor !== null ? this._cursor.data : null;
    }

    // if null-iterator, returns last node; otherwise, returns previous node
    prev(): T | null {
        if (this._cursor === null) {
            const root = this._tree._root;
            if (root !== null) {
                this._maxNode(root);
            }
        } else {
            if (this._cursor.left === null) {
                let save: Node<T>;
                do {
                    save = this._cursor;
                    if (this._ancestors.length) {
                        this._cursor = this._ancestors.pop()!;
                    } else {
                        this._cursor = null;
                        break;
                    }
                } while (this._cursor.left === save);
            } else {
                this._ancestors.push(this._cursor);
                this._maxNode(this._cursor.left);
            }
        }
        return this._cursor !== null ? this._cursor.data : null;
    }

    _minNode(start: Node<T>): void {
        while (start.left !== null) {
            this._ancestors.push(start);
            start = start.left;
        }
        this._cursor = start;
    }

    _maxNode(start: Node<T>): void {
        while (start.right !== null) {
            this._ancestors.push(start);
            start = start.right;
        }
        this._cursor = start;
    }
}

export abstract class TreeBase<T> {
    _root: Node<T> | null = null;
    size: number = 0;
    protected abstract _comparator: (a: T, b: T) => number;

    clear(): void {
        this._root = null;
        this.size = 0;
    }

    find(data: T): T | null {
        let res = this._root;
        while (res !== null) {
            const c = this._comparator(data, res.data);
            if (c === 0) {
                return res.data;
            } else {
                res = res.get_child(c > 0);
            }
        }
        return null;
    }

    findIter(data: T): TreeIterator<T> | null {
        let res = this._root;
        const iter = this.iterator();

        while (res !== null) {
            const c = this._comparator(data, res.data);
            if (c === 0) {
                iter._cursor = res;
                return iter;
            } else {
                iter._ancestors.push(res);
                res = res.get_child(c > 0);
            }
        }

        return null;
    }

    lowerBound(item: T): TreeIterator<T> {
        let cur = this._root;
        const iter = this.iterator();
        const cmp = this._comparator;

        while (cur !== null) {
            const c = cmp(item, cur.data);
            if (c === 0) {
                iter._cursor = cur;
                return iter;
            }
            iter._ancestors.push(cur);
            cur = cur.get_child(c > 0);
        }

        for (let i = iter._ancestors.length - 1; i >= 0; --i) {
            cur = iter._ancestors[i];
            if (cmp(item, cur.data) < 0) {
                iter._cursor = cur;
                iter._ancestors.length = i;
                return iter;
            }
        }

        iter._ancestors.length = 0;
        return iter;
    }

    upperBound(item: T): TreeIterator<T> {
        const iter = this.lowerBound(item);
        const cmp = this._comparator;

        while (iter.data() !== null && cmp(iter.data()!, item) === 0) {
            iter.next();
        }

        return iter;
    }

    min(): T | null {
        let res = this._root;
        if (res === null) {
            return null;
        }
        while (res.left !== null) {
            res = res.left;
        }
        return res.data;
    }

    max(): T | null {
        let res = this._root;
        if (res === null) {
            return null;
        }
        while (res.right !== null) {
            res = res.right;
        }
        return res.data;
    }

    iterator(): TreeIterator<T> {
        return new TreeIterator(this);
    }

    each(cb: (data: T) => void): void {
        const it = this.iterator();
        let data: T | null;
        while ((data = it.next()) !== null) {
            cb(data);
        }
    }

    reach(cb: (data: T) => void): void {
        const it = this.iterator();
        let data: T | null;
        while ((data = it.prev()) !== null) {
            cb(data);
        }
    }
}

function is_red<T>(node: Node<T> | null): boolean {
    return node !== null && node.red;
}

function single_rotate<T>(root: Node<T>, dir: boolean | number): Node<T> {
    const notDir = !dir;
    const save = root.get_child(notDir)!;

    root.set_child(notDir, save.get_child(dir));
    save.set_child(dir, root);

    root.red = true;
    save.red = false;

    return save;
}

function double_rotate<T>(root: Node<T>, dir: boolean | number): Node<T> {
    const notDir = !dir;
    root.set_child(notDir, single_rotate(root.get_child(notDir)!, notDir));
    return single_rotate(root, dir);
}

export class RBTree<T = any> extends TreeBase<T> {
    _comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        super();
        this._root = null;
        this._comparator = comparator;
        this.size = 0;
    }

    insert(data: T): boolean {
        let ret = false;

        if (this._root === null) {
            this._root = new Node(data);
            ret = true;
            this.size++;
        } else {
            const head = new Node<any>(undefined);

            let dir: number | boolean = 0;
            let last: number | boolean = 0;

            let gp: Node<T> | null = null;
            let ggp: Node<any> = head;
            let p: Node<T> | null = null;
            let node: Node<T> | null = this._root;
            ggp.right = this._root;

            while (true) {
                if (node === null) {
                    node = new Node(data);
                    p!.set_child(dir, node);
                    ret = true;
                    this.size++;
                } else if (is_red(node.left) && is_red(node.right)) {
                    node.red = true;
                    node.left!.red = false;
                    node.right!.red = false;
                }

                if (is_red(node) && is_red(p)) {
                    const dir2 = ggp.right === gp;

                    if (node === p!.get_child(last)) {
                        ggp.set_child(dir2, single_rotate(gp!, !last));
                    } else {
                        ggp.set_child(dir2, double_rotate(gp!, !last));
                    }
                }

                const cmp = this._comparator(node.data, data);

                if (cmp === 0) {
                    break;
                }

                last = dir;
                dir = cmp < 0;

                if (gp !== null) {
                    ggp = gp;
                }
                gp = p;
                p = node;
                node = node.get_child(dir);
            }

            this._root = head.right;
        }

        this._root!.red = false;
        return ret;
    }

    remove(data: T): boolean {
        if (this._root === null) {
            return false;
        }

        const head = new Node<any>(undefined);
        let node: Node<T> | null = head;
        node.right = this._root;
        let p: Node<T> | null = null;
        let gp: Node<T> | null = null;
        let found: Node<T> | null = null;
        let dir: number | boolean = 1;

        while (node!.get_child(dir) !== null) {
            const last = dir;

            gp = p;
            p = node;
            node = node!.get_child(dir)!;

            const cmp = this._comparator(data, node.data);
            dir = cmp > 0;

            if (cmp === 0) {
                found = node;
            }

            if (!is_red(node) && !is_red(node.get_child(dir))) {
                if (is_red(node.get_child(!dir))) {
                    const sr = single_rotate(node, dir);
                    p!.set_child(last, sr);
                    p = sr;
                } else if (!is_red(node.get_child(!dir))) {
                    const sibling = p!.get_child(!last);
                    if (sibling !== null) {
                        if (!is_red(sibling.get_child(!last)) && !is_red(sibling.get_child(last))) {
                            p!.red = false;
                            sibling.red = true;
                            node.red = true;
                        } else {
                            const dir2 = gp!.right === p;

                            if (is_red(sibling.get_child(last))) {
                                gp!.set_child(dir2, double_rotate(p!, last));
                            } else if (is_red(sibling.get_child(!last))) {
                                gp!.set_child(dir2, single_rotate(p!, last));
                            }

                            const gpc = gp!.get_child(dir2)!;
                            gpc.red = true;
                            node.red = true;
                            gpc.left!.red = false;
                            gpc.right!.red = false;
                        }
                    }
                }
            }
        }

        if (found !== null) {
            found.data = node!.data;
            p!.set_child(p!.right === node, node!.get_child(node!.left === null));
            this.size--;
        }

        this._root = head.right;
        if (this._root !== null) {
            this._root.red = false;
        }

        return found !== null;
    }
}
