declare module "emf-converter" {
    export function convertEmfToDataUrl(emfData: ArrayBuffer | Uint8Array, options?: any): Promise<string>;
}

declare module "exceljs/dist/exceljs.min.js" {
    import * as ExcelJS from "exceljs";
    export = ExcelJS;
}
