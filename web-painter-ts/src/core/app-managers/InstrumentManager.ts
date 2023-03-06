import { Instrument, wpElement } from "../index";
import { Listeners } from "../models/types";

export class InstrumentManager {
    private instrumentExecutor: Instrument

    constructor(instrumentExecutor: Instrument) {
        this.instrumentExecutor = instrumentExecutor;
    }

    get executor() {
        return this.instrumentExecutor;
    }

    getFieldInstrumentListener(): Listeners[] {
        return [
            {
                element: wpElement.INSTRUMENT_FIELD,
                event: 'click',
                callback: (event: Event): void => {
                    this.instrumentExecutor.resetAll(event.target as HTMLElement);
                }
            }
        ];
    }

    getButtonInstrumentListeners(): Listeners[] {
        return [
            {
                element: wpElement.RECYCLE_BUTTON,
                event: "click",
                callback: (): void => {
                    this.instrumentExecutor.executeWithTool(wpElement.RECYCLE_BUTTON.id)
                }
            },

            {
                element: wpElement.RANGE_BUTTON,
                event: "click",
                callback: (event: Event): void => {
                    this.instrumentExecutor.handleWith(wpElement.RANGE_BUTTON.id, event.target as HTMLElement);
                }
            },
            {
                element: wpElement.IMAGE_BUTTON,
                event: "click",
                callback: () => {
                    this.instrumentExecutor.handleWith(wpElement.IMAGE_BUTTON.id);
                }
            },
        ];
    }

    getInputInstrumentListeners(): Listeners[] {
        return [
            {
                element: wpElement.RANGE_INPUT,
                event: "change",
                callback: (event: Event): void => {
                    this.instrumentExecutor.executeWithTool(
                        wpElement.RANGE_BUTTON.id, (event.target as HTMLInputElement).value
                    )
                }
            },
            {
                element: wpElement.COLOR_INPUT,
                event: "input",
                callback: (event: Event): void => {
                    const colorValue = (event.target as HTMLInputElement).value;
                    this.instrumentExecutor.executeWithTool(wpElement.COLOR_INPUT.id, colorValue);
                }
            },
            {
                element: wpElement.IMAGE_INPUT,
                event: 'change',
                callback: (event: Event) => {
                    this.instrumentExecutor.executeWithTool(
                        wpElement.IMAGE_BUTTON.id, (event.target as HTMLInputElement).files![0]
                    );
                    (event.target as HTMLInputElement).value = '';
                }
            }
        ];
    }
}