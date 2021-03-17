import { state } from "../../state";
import { calculate } from "../calculate";
import { display } from "../dom.elements";

export function operationButtonClicked(button) {
    if(state.operationInProgress) display.value = calculate(state.currentOperand, display.value, state.operationInProgress)
    state.currentOperand = display.value
    state.operationInProgress = button;
}