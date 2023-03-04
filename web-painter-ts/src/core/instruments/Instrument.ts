import { InstrumentTools, InstrumentValue } from "../models/types";
import { Range } from "./tools/Range";
import { Recycle } from "./tools/Recycle";

export class Instrument {
    public instruments: InstrumentTools[];

    constructor(instruments: InstrumentTools[]) {
        this.instruments = instruments;
    }

    get range() {
        return this.instruments.find(instrument => instrument instanceof Range) as Range;
    }

    get recycle() {
        return this.instruments.find(instrument => instrument instanceof Recycle) as Recycle;
    }

    executeWithTool(id: string, value: InstrumentValue): void {
        for (const instrument of this.instruments) {
            if (id === instrument.name) {
                instrument.execute(value);
            }
        }
    }
}