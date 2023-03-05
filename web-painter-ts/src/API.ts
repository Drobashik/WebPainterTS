import { Circle, Sqaure, Instrument, Recycle, Painter, ToolInventory } from "./core/index";
import { Color } from "./core/instruments/tools/Color";
import { Range } from "./core/instruments/tools/Range";
import { wpElement } from "./core/models/constants";
import { DrawingElements, Listeners, Position } from "./core/models/types";

const handleCurrentPosition = (
    event: MouseEvent,
    element: HTMLElement,
    size: number
): Position => {
    return {
        x: event.clientX - element.offsetLeft - size / 2,
        y: event.clientY - element.offsetTop - size / 2,
    }
}

const getTools = (
    size: number,
    color: string,
    element?: HTMLElement,
    event?: MouseEvent,
): DrawingElements[] => {
    return [
        new Circle(
            size, color,
            event || element ?
                handleCurrentPosition(
                    event as MouseEvent,
                    element as HTMLElement,
                    size
                ) : null,
        ),
        new Sqaure(
            size, color,
            event || element ?
                handleCurrentPosition(
                    event as MouseEvent,
                    element as HTMLElement,
                    size
                ) : null,
        ),
    ];
}

export const intitiateApp = (): Listeners[] => {
    const instrumentExecutor = new Instrument([
        new Recycle(wpElement.PAINTER, wpElement.RECYCLE.id),
        new Range(wpElement.RANGE_BUTTON, wpElement.RANGE_BUTTON.id),
        new Color(wpElement.COLOR_INPUT.id),
    ]);

    const toolsInventory = new ToolInventory(
        getTools(75, 'black'),
        wpElement.TOOL_FIELD
    );

    const painter = new Painter(toolsInventory);

    toolsInventory.render();

    return [
        {
            element: wpElement.INSTRUMENT_FIELD,
            event: "click",
            callback: (event: Event): void => {
                instrumentExecutor.resetAll(event.target as HTMLElement);
            }
        },

        /* Tool object */

        {
            element: wpElement.TOOL_FIELD,
            event: "click",
            callback: (event: Event): void => {
                instrumentExecutor.resetAll();
                toolsInventory.choose(event.target as HTMLElement);
            }
        },

        /* Painting object */

        {
            element: wpElement.PAINTER,
            event: "mousedown",
            callback: (event: Event): void => {
                instrumentExecutor.resetAll();

                painter.startDraw();
                painter.draw(getTools(
                    instrumentExecutor.range.value,
                    instrumentExecutor.color.value,
                    wpElement.PAINTER,
                    event as MouseEvent,
                ));
            }
        },

        {
            element: wpElement.PAINTER,
            event: "mousemove",
            callback: (event: Event): void => {
                painter.draw(getTools(
                    instrumentExecutor.range.value,
                    instrumentExecutor.color.value,
                    wpElement.PAINTER,
                    event as MouseEvent,
                ));
            }
        },

        {
            element: wpElement.PAINTER,
            event: "mouseup",
            callback: (): void => {
                painter.endDraw();
            }
        },

        /* Instrument object */

        {
            element: wpElement.RECYCLE,
            event: "click",
            callback: (): void => {
                instrumentExecutor.executeWithTool(wpElement.RECYCLE.id, '')
            }
        },

        {
            element: wpElement.RANGE_BUTTON,
            event: "click",
            callback: (event: Event): void => {
                instrumentExecutor.range.handle(event.target as HTMLElement);
            }
        },

        {
            element: wpElement.RANGE_INPUT,
            event: "change",
            callback: (event: Event): void => {
                instrumentExecutor.executeWithTool(
                    wpElement.RANGE_BUTTON.id, (event.target as HTMLInputElement).value
                )
            }
        },

        {
            element: wpElement.COLOR_INPUT,
            event: "input",
            callback: (event: Event): void => {
                const colorValue = (event.target as HTMLInputElement).value;
                instrumentExecutor.executeWithTool(wpElement.COLOR_INPUT.id, colorValue);
            }
        },

    ];
}