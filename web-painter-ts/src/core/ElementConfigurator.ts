import { Circle } from "./figures/Circle";
import { Figure } from "./figures/Figure";
import { Image } from "./instruments/tools/Image";
import { Position } from "./models/types";

export class ElementConfigurator {
    createElement(elementName: string = 'div', object: Figure | Image): HTMLElement {
        const element = document.createElement(elementName);
        element.className = object.name;
        return element;
    }

    configureElement(object: Figure, elementName: string = 'div'): HTMLElement {
        const createdElement = this.createElement(elementName, object);
        this.insertStyles(createdElement, object);
        return createdElement;
    }

    insertElement(whereInsert: HTMLElement | null, insertingElement: HTMLElement): void {
        whereInsert?.insertAdjacentElement("beforeend", insertingElement);
    }

    insertStyles(element: HTMLElement, object: Figure): void {
        element.style.width = object.width + 'px';
        element.style.height = object.height + 'px';
        element.style.background = object.color;
        element.style.borderRadius = object instanceof Circle ? '50%' : '0%';
    }

    setElementPosition(element: HTMLElement, position: Position | null): void {
        element.style.top = position?.y + 'px';
        element.style.left = position?.x + 'px';
    }
}