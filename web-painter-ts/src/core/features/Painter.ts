import { ToolInventory } from "./ToolInventory";
import { DrawingElements } from "../models/types";

export class Painter {
    public toolInventory: ToolInventory;
    private isReadyDraw: boolean;

    constructor(toolInventory: ToolInventory) {
        this.toolInventory = toolInventory;
        this.isReadyDraw = false;
    }

    startDraw(tools: DrawingElements[]): void {
        this.isReadyDraw = true;
        this.draw(tools);
    }

    draw(tools: DrawingElements[]): void {
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