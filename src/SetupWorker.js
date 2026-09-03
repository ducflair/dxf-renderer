import {DxfWorker} from "./DxfWorker.js"


export function SetupWorker() {
    new DxfWorker(self, true)
}
