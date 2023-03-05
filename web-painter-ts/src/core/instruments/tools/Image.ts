import { ElementConfigurator } from "../../ElementConfigurator";
import { wpElement } from "../../models/constants";
import { IInstrument, InstrumentValue } from "../../models/types";

export class Image implements IInstrument {
    public imageElement: HTMLElement;
    public name: string;
    private elementHandler: ElementConfigurator;

    constructor(imageElement: HTMLElement, name: string) {
        this.imageElement = imageElement;
        this.name = name;

        this.elementHandler = new ElementConfigurator();
    }

    setImagePosition(imageElement: HTMLImageElement) {
        setTimeout(() => {
            this.elementHandler.insertElement(wpElement.PAINTER, imageElement)
            this.elementHandler.setElementPosition(imageElement, {
                x: wpElement.PAINTER.offsetWidth / 2 - imageElement.offsetWidth / 2,
                y: wpElement.PAINTER.offsetHeight / 2 - imageElement.offsetHeight / 2,
            })
        }, 10)
    }

    execute(file: InstrumentValue) {
        const fileURL = URL.createObjectURL(file as Blob);
        const imageElement = this.elementHandler.createElement('img', this) as HTMLImageElement;
        imageElement.src = fileURL;
        imageElement.draggable = false;
        this.setImagePosition(imageElement);
    }

    handle() {
        (this.imageElement.lastElementChild as HTMLInputElement).click();
    }

    reset() {}
}