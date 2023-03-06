import { InstrumentTools, InstrumentValue } from "../models/types";
import { Color, Range } from '../index';

export class Instrument {
    public instruments: InstrumentTools[];

    constructor(instruments: InstrumentTools[]) {
        this.instruments = instruments;
    }

    get color() {
        return this.instruments.find(instrument => instrument instanceof Color) as Color;
    }

    get range() {
        return this.instruments.find(instrument => instrument instanceof Range) as Range;
    }

    executeWithTool(id: string, value?: InstrumentValue): void {
        for (const instrument of this.instruments) {
            if (id === instrument.name)
                instrument.execute(value);
        }
    }

    handleWith(id: string, clickedElement?: HTMLElement): void {
        for (const instrument of this.instruments) {
            if (id === instrument.name) 
                instrument.handle(clickedElement)
        }
    }

    resetAll(element?: HTMLElement): void {
        for (const instrument of this.instruments) {
            if (element?.id.includes(instrument.name) || element?.className.includes(instrument.name))
                continue;
            instrument.reset();
        }
    }
}