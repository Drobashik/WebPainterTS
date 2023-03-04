import { WPElements } from "./types";

export const wpElement: WPElements = {
    PAINTER: document.getElementById('painter') as HTMLElement,
    TOOL_FIELD: document.getElementById('tools') as HTMLElement,
    RECYCLE: document.getElementById('recycle') as HTMLElement,
    RANGE_BUTTON: document.getElementById('size') as HTMLElement,
    RANGE_INPUT: document.getElementById('range') as HTMLInputElement,
}