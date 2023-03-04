import { InstrumentValue } from "../../models/types";

export class Color {
    public name: string;
    public value: string;

    constructor(name: string) {
        this.name = name;
        this.value = 'black';
    }

    execute(value: InstrumentValue) {
        this.value = value as string;
    }

    reset() {}
}