import { DxfWorker } from "./DxfWorker.js";

export function SetupWorker(): void {
    new DxfWorker(self as any, true);
}
