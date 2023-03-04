import { InstrumentValue } from "../../models/types";

export class Recycle {
    public name: string;
    private field: HTMLElement;

    constructor(field: HTMLElement, name: string) {
        this.field = field;
        this.name = name;
    }

    execute(value: InstrumentValue) {
        this.field.innerHTML = value as string;
        this.field.insertAdjacentHTML('afterbegin', '<div class="app__sides"></div>');
    }
}