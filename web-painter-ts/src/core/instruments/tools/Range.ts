import { InstrumentValue } from "../../models/types";

export class Range {
    public name: string;
    public value: number;
    private isShowed: boolean;
    private rangeElement: HTMLInputElement;

    constructor(rangeElement: HTMLInputElement, name: string) {
        this.rangeElement = rangeElement;
        this.name = name;

        this.isShowed = false;
        this.value = 50;
    }

    execute(value: InstrumentValue) {
        this.value = value as number;
    }

    handle(clickedElement: HTMLElement): void {
        if (clickedElement.tagName.includes(this.rangeElement.tagName)) return;

        this.isShowed = !this.isShowed;

        if (this.isShowed) {
            (this.rangeElement.parentNode as HTMLElement).style.display = 'block';
            return;
        }
        
        (this.rangeElement.parentNode as HTMLElement).style.display = 'none';
    }

    reset() {
        this.isShowed = false;
        (this.rangeElement.parentNode as HTMLElement).style.display = 'none';
    }
}