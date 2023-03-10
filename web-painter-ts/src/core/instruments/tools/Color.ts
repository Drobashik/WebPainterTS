import { IInstrument, InstrumentValue } from "../../models/types";

export class Color implements IInstrument {
    public name: string;
    public value: string;

    constructor(name: string) {
        this.name = name;
        this.value = 'black';
    }

    execute(value: InstrumentValue): void {
        this.value = value as string;
    }

    handle(): void {}

    reset(): void {}
}