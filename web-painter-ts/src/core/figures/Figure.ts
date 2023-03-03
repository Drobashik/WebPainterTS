import { ElementConfigurator } from "../ElementConfigurator";
import { Position } from "../types/types";

export class Figure {
    public width: number;
    public height: number;
    public color: string;
    public position: Position | null;
    private elementHandler: ElementConfigurator;
    protected _name: string;


    constructor(width: number, height: number, color: string, position: Position | null = null) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = position;

        this._name = '';
        this.elementHandler = new ElementConfigurator();
    }

    set name(_name) {
        this._name = _name;
    }

    get name() {
        return this._name;
    }

    protected configureFigure(figure: Figure): HTMLElement {
        const createdFigureElement = this.elementHandler.configureElement(figure);
        this.elementHandler.setElementPosition(createdFigureElement, figure.position);
        this.elementHandler.insertElement(document.getElementById('painter'), createdFigureElement)
        return createdFigureElement;
    }
}