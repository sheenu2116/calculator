import { display } from "../dom.elements";
import { buttonToValueMap as BUTTONS } from "../../constants/value-button.constant";
import { isOperationOrFunction } from "../validations";
import { state } from "../../state";

export function numberButtonClicked(button) {
    if (display.value === '0' || display.value === '' || isOperationOrFunction(state.lastKey)) {
        if(button === BUTTONS.DECIMAL) {
            display.value = '0.'
        } else display.value = BUTTONS[button]
        
      } else {
        display.value = display.value + BUTTONS[button]
      }
    
}