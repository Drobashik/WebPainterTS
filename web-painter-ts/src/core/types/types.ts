import { Circle } from "../figures/Circle"
import { Sqaure } from "../figures/Square"

export type Position = {
    x: number,
    y: number,
}

export type Listeners = {
    element: HTMLElement,
    event: string,
    callback: (event: Event) => void,
}

export type DrawingElements = Circle[] | Sqaure[]