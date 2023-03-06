import { IInstrument, InstrumentValue } from "../../models/types";

export class Recycle implements IInstrument {
    public name: string;
    private field: HTMLElement;

    constructor(field: HTMLElement, name: string) {
        this.field = field;
        this.name = name;
    }

    execute(value: InstrumentValue): void {
        this.field.innerHTML = value as string;
        this.field.insertAdjacentHTML('afterbegin', '<div class="app__sides"></div>');
    }

    handle() {};

    reset() {}
}