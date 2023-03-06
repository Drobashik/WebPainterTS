import { IInstrument, InstrumentValue } from "../../models/types";

export class Range implements IInstrument {
    public name: string;
    public value: number;
    private isShowed: boolean;
    private rangeElement: HTMLElement;

    constructor(rangeElement: HTMLElement, name: string) {
        this.rangeElement = rangeElement;
        this.name = name;

        this.isShowed = false;
        this.value = 50;
    }

    execute(value: InstrumentValue): void {
        this.value = value as number;
    }

    handle(clickedElement?: HTMLElement): void {
        if (clickedElement?.tagName.includes("INPUT")) return;

        this.isShowed = !this.isShowed;

        if (this.isShowed) {
            (this.rangeElement.lastElementChild as HTMLElement).style.display = 'block';
            return;
        }
        
        (this.rangeElement.lastElementChild as HTMLElement).style.display = 'none';
    }

    reset(): void {
        this.isShowed = false;
        (this.rangeElement.lastElementChild as HTMLElement).style.display = 'none';
    }
}