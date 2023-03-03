export class Recycle {
    public name: string;
    private field: HTMLElement;

    constructor(field: HTMLElement, name: string) {
        this.field = field;
        this.name = name;
    }

    execute(event: Event | string) {
        this.field.innerHTML = event as string;
        this.field.insertAdjacentHTML('afterbegin', '<div class="app__sides"></div>');
    }
}