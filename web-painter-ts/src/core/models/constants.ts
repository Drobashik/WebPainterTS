import { WPElement } from "./types";

export const wpElement: WPElement = {
    PAINTER_FIELD: document.getElementById('painter') as HTMLElement,
    TOOL_FIELD: document.getElementById('tools') as HTMLElement,
    INSTRUMENT_FIELD: document.getElementById('instruments') as HTMLElement,
    RECYCLE_BUTTON: document.getElementById('recycle') as HTMLElement,
    RANGE_BUTTON: document.getElementById('size') as HTMLElement,
    RANGE_INPUT: document.getElementById('range') as HTMLInputElement,
    COLOR_INPUT: document.getElementById('color') as HTMLInputElement,
    IMAGE_BUTTON: document.getElementById('file-btn') as HTMLElement,
    IMAGE_INPUT: document.getElementById('fileType') as HTMLInputElement,
}