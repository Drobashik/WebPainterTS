import { Circle } from "../figures/Circle"
import { Sqaure } from "../figures/Square"
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
    RANGE: HTMLElement,
}

export type DrawingElements = Circle | Sqaure;

export type InstrumentTools = Recycle;

export type InstrumentEvent<T> = Event | T;