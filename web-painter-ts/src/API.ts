import { Circle } from "./core/figures/Circle"
import { Sqaure } from "./core/figures/Square"
import { Painter } from "./core/Painter"
import { ToolInventory } from "./core/ToolInventory"
import { DrawingElements, Listeners, Position } from "./core/types/types"

const handleCurrentPosition = (event: MouseEvent, element: HTMLElement, size: number): Position => {
    return {
        x: event.clientX - element.offsetLeft - size / 2,
        y: event.clientY - element.offsetTop - size / 2,
    }
}

const getTools = (event: MouseEvent, element: HTMLElement): DrawingElements => {
    return [
        new Circle(50, 'black', handleCurrentPosition(event, element, 50)),
        new Sqaure(50, 'black', handleCurrentPosition(event, element, 50)),
    ]
}

export const intitiateApp = (): Listeners[] => {
    const toolsInventory = new ToolInventory([
        new Circle(75, 'black', null),
        new Sqaure(75, 'black', null),
    ])
    const painter = new Painter(toolsInventory)

    toolsInventory.render();

    return [

        /* Tool object */

        {
            element: toolsInventory.toolInventoryElement as HTMLElement,
            event: "click",
            callback: (event: Event) => {
                console.log(event)
                toolsInventory.choose(event.target as HTMLElement);
            }
        },

        /* Painting object */

        {
            element: painter.painterFieldElement as HTMLElement,
            event: "mousedown",
            callback: (event: Event) => {
                painter.startDraw();
                painter.draw(getTools(
                    event as MouseEvent, painter.painterFieldElement as HTMLElement
                ));
            }
        },

        {
            element: painter.painterFieldElement as HTMLElement,
            event: "mousemove",
            callback: (event: Event) => {
                painter.draw(getTools(
                    event as MouseEvent, painter.painterFieldElement as HTMLElement
                ));
            }
        },

        {
            element: painter.painterFieldElement as HTMLElement,
            event: "mouseup",
            callback: () => {
                painter.endDraw();
            }
        },

        /* Instrument object */
    ]
}