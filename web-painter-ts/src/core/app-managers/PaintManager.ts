import { Circle, Instrument, Painter, Sqaure, wpElement } from "../index";
import { DrawingElements, Listeners, Position } from "../models/types";

export class PaintManager {
    private painter: Painter;
    private instrumentExecutor: Instrument

    constructor(painter: Painter, instrumentExecutor: Instrument) {
        this.painter = painter;
        this.instrumentExecutor = instrumentExecutor;
    }

    static handleToolPosition(
        event: MouseEvent,
        element: HTMLElement,
        size: number
    ): Position {
        return {
            x: event.clientX - element.offsetLeft - size / 2,
            y: event.clientY - element.offsetTop - size / 2,
        }
    }

    static getTools(
        size: number,
        color: string,
        element?: HTMLElement,
        event?: MouseEvent
    ): DrawingElements[] {
        return [
            new Circle(
                size, color,
                event || element ?
                    PaintManager.handleToolPosition(
                        event as MouseEvent,
                        element as HTMLElement,
                        size
                    ) : null,
            ),
            new Sqaure(
                size, color,
                event || element ?
                    PaintManager.handleToolPosition(
                        event as MouseEvent,
                        element as HTMLElement,
                        size
                    ) : null,
            ),
        ]
    }

    getPaintListeners(): Listeners[] {
        return [
            {
                element: wpElement.PAINTER_FIELD,
                event: "mousedown",
                callback: (event: Event): void => {
                    this.instrumentExecutor.resetAll();
    
                    this.painter.startDraw();
                    this.painter.draw(PaintManager.getTools(
                        this.instrumentExecutor.range.value,
                        this.instrumentExecutor.color.value,
                        wpElement.PAINTER_FIELD,
                        event as MouseEvent,
                    ));
                }
            },
    
            {
                element: wpElement.PAINTER_FIELD,
                event: "mousemove",
                callback: (event: Event): void => {
                    this.painter.draw(PaintManager.getTools(
                        this.instrumentExecutor.range.value,
                        this.instrumentExecutor.color.value,
                        wpElement.PAINTER_FIELD,
                        event as MouseEvent,
                    ));
                }
            },
    
            {
                element: wpElement.PAINTER_FIELD,
                event: "mouseup",
                callback: (): void => {
                    this.painter.endDraw();
                }
            },
        ]
    }
}