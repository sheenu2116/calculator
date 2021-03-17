import { state } from "../../state";
import { display, calculationPane } from "../dom.elements";

export default {
    PLUS: (a,b) => a+b,
    MINUS: (a,b) => a-b,
    DIVIDE: (a,b) => a/b,
    MULTIPLY: (a,b) => a*b,
    PERCENT: (a,b) => a*b/100,
    clear: ()=> {
        state.lastKey = null, display.value= '', state.operationInProgress = null, state.currentOperand = '', calculationPane.innerText = ''
    }
}