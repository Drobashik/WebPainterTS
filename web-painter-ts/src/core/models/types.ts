import { Circle } from "../figures/Circle"
import { Sqaure } from "../figures/Square"
import { Color } from "../instruments/tools/Color";
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

export type WPElement = {
    PAINTER: HTMLElement,
    TOOL_FIELD: HTMLElement,
    RECYCLE: HTMLElement,
    INSTRUMENT_FIELD: HTMLElement,
    RANGE_BUTTON: HTMLElement,
    RANGE_INPUT: HTMLInputElement,
    COLOR_INPUT: HTMLInputElement,
}

export type DrawingElements = Circle | Sqaure;

export type InstrumentTools = Range | Recycle | Color;

export type InstrumentValue = number | string;

