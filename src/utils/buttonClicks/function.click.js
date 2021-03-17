import { state } from "../../state";
import { calculate } from "../calculate";
import { display } from "../dom.elements";
import OPERTAIONS from "../operations";

export function functionButtonClicked(button) {
   switch(button) {
        case 'CLEAR': OPERTAIONS.clear()
            break
        case 'PLUSMINUS': if(!display.value) return
            display.value = display.value/1 < 0? display.value.substring(1): `-${display.value}`
            break
        case 'EQUAL': display.value = calculate(state.currentOperand, display.value, state.operationInProgress);
            state.currentOperand = display.value;
            state.operationInProgress = null
            break
        default:
   }
}