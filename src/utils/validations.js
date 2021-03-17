import { buttonGroups } from "../constants/buttonGroup.constant";

export function isOperation (button) {
    return buttonGroups.OPERATION.includes(button)
}

export function isFunction (button) {
    return buttonGroups.FUNCTION.includes(button)
}

export function isNumber (button) {
    return buttonGroups.NUMBER.includes(button)
}

export function isOperationOrFunction (button) {
    return isOperation(button) || isFunction(button)
}