import { Circle } from "../figures/Circle"
import { Sqaure } from "../figures/Square"
import { Color } from "../instruments/tools/Color";
import { Image } from "../instruments/tools/Image";
import { Range } from "../instruments/tools/Range";
import { Recycle } from "../instruments/tools/Recycle";

export interface IInstrument {
    execute: (value: InstrumentValue) => void,
    handle: (clickedElement?: HTMLElement) => void,
    reset: () => void,
}

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
    IMAGE_BUTTON: HTMLElement,
    IMAGE_INPUT: HTMLInputElement,
}

export type DrawingElements = Circle | Sqaure;

export type InstrumentTools = Range | Recycle | Color | Image;

export type InstrumentValue = number | string | File | undefined;

