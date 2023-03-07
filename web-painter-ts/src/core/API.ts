import {
    Instrument, Recycle,
    Painter, ToolInventory, Color, Image, 
    Range, wpElement, ToolManager, InstrumentManager,
    PaintManager,
} from "./index";
import { Listeners } from "./models/types";

export const intitiateApp = (): Listeners[] => {
    const instrumentManager = new InstrumentManager(
        new Instrument([
            new Recycle(wpElement.PAINTER_FIELD, wpElement.RECYCLE_BUTTON.id),
            new Range(wpElement.RANGE_BUTTON, wpElement.RANGE_BUTTON.id),
            new Image(wpElement.IMAGE_BUTTON, wpElement.IMAGE_BUTTON.id),
            new Color(wpElement.COLOR_INPUT.id),
        ])
    );

    const toolManager = new ToolManager(
        new ToolInventory(PaintManager.getTools(75, 'black'), wpElement.TOOL_FIELD),
        instrumentManager.executor
    );

    const paintManager = new PaintManager(
        new Painter(toolManager.inventory),
        instrumentManager.executor
    );

    return [
        ...toolManager.getToolListeners(),
        ...paintManager.getPaintListeners(),
        ...instrumentManager.getFieldInstrumentListener(),
        ...instrumentManager.getInputInstrumentListeners(),
        ...instrumentManager.getButtonInstrumentListeners(),
    ];
}