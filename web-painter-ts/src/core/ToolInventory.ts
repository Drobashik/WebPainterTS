import { ElementConfigurator } from "./ElementConfigurator";
import { Figure } from "./figures/Figure";

export class ToolInventory {
    public tools: Figure[];
    private toolInventoryElement: HTMLElement | null;
    private _tool: string | null;
    private elementHandler: ElementConfigurator;

    constructor(tools: Figure[], toolInventoryElement: HTMLElement) {
        this.tools = tools;
        this.toolInventoryElement = toolInventoryElement;

        this.elementHandler = new ElementConfigurator();
        this._tool = null;

        this.render();
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

        this.reset();

        toolElement.style.transform = 'scale(1.25)';
        this._tool = toolElement.className;
    }

    reset(): void {
        this._tool = null;

        for (const toolChildren of Array.from(this.toolInventoryElement!.children)) {
            (toolChildren as HTMLElement).style.transform = 'scale(1)';
        }
    }
}