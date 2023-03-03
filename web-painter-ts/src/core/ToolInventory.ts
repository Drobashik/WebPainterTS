import { ElementConfigurator } from "./ElementConfigurator";
import { Figure } from "./figures/Figure";

export class ToolInventory {
    public tools: Figure[];
    public toolInventoryElement: HTMLElement | null;
    private _tool: string | null;
    private elementHandler: ElementConfigurator;

    constructor(tools: Figure[]) {
        this.tools = tools;

        this.elementHandler = new ElementConfigurator();
        this._tool = null;
        this.toolInventoryElement = document.getElementById('tools');
    }

    get tool() {
        return this._tool;
    }

    set tool(_tool) {
        this._tool = _tool;
    }

    render(): void {
        for (const tool of this.tools) {
            const createdTool = this.elementHandler.configureElement(tool);
            this.elementHandler.insertElement(this.toolInventoryElement, createdTool);
        }
    }

    choose(toolElement: HTMLElement): void {
        if (toolElement.id === 'tools') return;

        if (toolElement.className === this._tool) {
            toolElement.style.transform = 'scale(1)';
            this._tool = null;
            return;
        }

        this.reset(false);

        toolElement.style.transform = 'scale(1.25)';
        this._tool = toolElement.className;
    }

    reset(isFull: boolean): void {
        for (const toolChildren of Array.from(this.toolInventoryElement!.children)) {
            (toolChildren as HTMLElement).style.transform = 'scale(1)';
        }

        if (isFull) this._tool = null;
    }
}