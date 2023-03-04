import { Circle } from "../figures/Circle"
import { Sqaure } from "../figures/Square"
import { Range } from "../instruments/tools/Range";
import { Recycle } from "../instruments/tools/Recycle";

export type Position = {
    x: number,
    y: number,
}

export type Listeners = {
    element: HTMLElement,
    event: string,
    callback: (event: Event) => void,
}

export type WPElements = {
    PAINTER: HTMLElement,
    TOOL_FIELD: HTMLElement,
    RECYCLE: HTMLElement,
    RANGE_BUTTON: HTMLElement,
    RANGE_INPUT: HTMLInputElement
}

export type DrawingElements = Circle | Sqaure;

export type InstrumentTools = Range | Recycle;

export type InstrumentValue = number | string;

