import { keyCodeToButtonMap } from "../constants/keyCodeToButton.constant";
import { valueToButtonMap } from "../constants/value-button.constant";
import { state } from "../state";
import { functionButtonClicked, operationButtonClicked, numberButtonClicked } from "../utils/buttonClicks";
import { isFunction, isOperation, isNumber } from "../utils/validations";


export function buttonClick (event, button) {

    if(!button) {
        const buttonElement = event.currentTarget;
        const buttonInput = buttonElement.firstElementChild
        button= valueToButtonMap[buttonInput.value]
    }  
    
    if(isFunction(button)) {
        functionButtonClicked(button)
    } else if (isOperation(button)) {
        operationButtonClicked(button)
    } else if (isNumber(button)) {
        numberButtonClicked(button)
    }
    state.lastKey = button
}

export function keypressToButton (event) {
    const button = keyCodeToButtonMap[event.keyCode]
    if(button) buttonClick(null, button)
}