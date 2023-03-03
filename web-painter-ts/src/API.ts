import { Circle, Sqaure, Instrument, Recycle, Painter, ToolInventory } from "./core/index";
import { wpElement } from "./core/models/constants";
import { DrawingElements, Listeners, Position } from "./core/models/types";

const handleCurrentPosition = (event: MouseEvent, element: HTMLElement, size: number): Position => {
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
            event || element
                ? handleCurrentPosition(
                    event as MouseEvent,
                    element as HTMLElement,
                    size
                ) : null,
        ),
        new Sqaure(
            size, color,
            event || element
                ? handleCurrentPosition(
                    event as MouseEvent,
                    element as HTMLElement,
                    size
                ) : null,
        ),
    ]
}

export const intitiateApp = (): Listeners[] => {
    const instrumentExecutor = new Instrument([
        new Recycle(wpElement.PAINTER, wpElement.RECYCLE.id),
    ]);

    const toolsInventory = new ToolInventory(
        getTools(75, 'black'),
        wpElement.TOOL_FIELD
    );

    const painter = new Painter(toolsInventory);


    toolsInventory.render();

    return [

        /* Tool object */

        {
            element: wpElement.TOOL_FIELD,
            event: "click",
            callback: (event: Event) => {
                toolsInventory.choose(event.target as HTMLElement);
            }
        },

        /* Painting object */

        {
            element: wpElement.PAINTER,
            event: "mousedown",
            callback: (event: Event) => {
                painter.startDraw();
                painter.draw(getTools(
                    50,
                    'black',
                    wpElement.PAINTER,
                    event as MouseEvent,
                ));
            }
        },

        {
            element: wpElement.PAINTER,
            event: "mousemove",
            callback: (event: Event) => {
                painter.draw(getTools(
                    50,
                    'black',
                    wpElement.PAINTER,
                    event as MouseEvent,
                ));
            }
        },

        {
            element: wpElement.PAINTER,
            event: "mouseup",
            callback: () => {
                painter.endDraw();
            }
        },

        /* Instrument object */

        {
            element: wpElement.RECYCLE,
            event: "click",
            callback: () => {
                instrumentExecutor.executeWithTool(wpElement.RECYCLE.id, '')
            }
        },
    ]
}