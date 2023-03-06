import { Listeners } from "../models/types";
import { Instrument, ToolInventory, wpElement } from "../index";

export class ToolManager {
    private tool: ToolInventory;
    private instrument: Instrument;

    constructor(tool: ToolInventory, instrument: Instrument) {
        this.tool = tool;
        this.instrument = instrument;
    }

    get inventory() {
        return this.tool;
    }

    getToolListeners(): Listeners[] {
        return [
            {
                element: wpElement.TOOL_FIELD,
                event: "click",
                callback: (event: Event): void => {
                    this.instrument.resetAll();
                    this.tool.choose(event.target as HTMLElement);
                }
            },
        ]
    }
}