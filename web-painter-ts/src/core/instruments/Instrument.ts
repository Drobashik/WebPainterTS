import { InstrumentTools, InstrumentValue } from "../models/types";

export class Instrument {
    public instruments: InstrumentTools[];

    constructor(instruments: InstrumentTools[]) {
        this.instruments = instruments;
    }

    getValue(id?: string): string | number | null {
        for (const instrument of this.instruments) {
            if(instrument.name === id)
                return instrument.value;
        }
        return null;
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