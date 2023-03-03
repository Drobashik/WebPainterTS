import { InstrumentEvent, InstrumentTools } from "../models/types";

export class Instrument {
    public instruments: InstrumentTools[];

    constructor(instruments: InstrumentTools[]) {
        this.instruments = instruments;
    }

    executeWithTool(id: string, event: InstrumentEvent<Event | string>) {
        for (const instrument of this.instruments) {
            if (id === instrument.name) {
                instrument.execute(event);
            }
        }
    }
}