import { buttonToValueMap } from "../constants/value-button.constant";
import { calculationPane } from "./dom.elements";
import OPERATIONS from "./operations";


export function calculate (firstOperand, secondOperand, operator) {
    if(!operator) return secondOperand
    calculationPane.innerText = `${firstOperand} ${buttonToValueMap[operator]} ${secondOperand}`
    return OPERATIONS[operator](firstOperand/1, secondOperand/1)
}