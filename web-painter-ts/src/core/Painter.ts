import { ToolInventory } from "./ToolInventory";
import { DrawingElements } from "./types/types";

export class Painter {
    public toolInventory: ToolInventory;
    public painterFieldElement: HTMLElement | null;
    private isReadyDraw: boolean;

    constructor(toolInventory: ToolInventory) {
        this.toolInventory = toolInventory;

        this.isReadyDraw = false;
        this.painterFieldElement = document.getElementById('painter');
    }

    startDraw(): void {
        this.isReadyDraw = true;
    }

    draw(tools: DrawingElements): void {
        if (!this.isReadyDraw || !this.toolInventory.tool) return;

        for (const tool of tools) {
            if (tool.name.includes(this.toolInventory.tool)) {
                tool.name = 'figure';
                tool.configure();
            }
        }
    }

    endDraw(): void {
        this.isReadyDraw = false;
    }
}