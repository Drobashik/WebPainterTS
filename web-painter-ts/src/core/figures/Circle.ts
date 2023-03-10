import { Position } from "../models/types";
import { Figure } from "./Figure";

export class Circle extends Figure {
    constructor(size: number, color: string, position: Position | null) {
        super(size, size, color, position);
        this._name = 'circle';
    }

    set name(_name) {
        this._name = _name.includes('figure') ? `${this._name} ${_name}` : this._name;
    }

    get name() {
        return this._name;
    }

    configure(): HTMLElement {
        return super.configure(this)
    }
}