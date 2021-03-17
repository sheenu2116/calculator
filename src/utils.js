export const valueToButtonMap = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    0: 'ZERO',
    '+': 'PLUS',
    '−': 'MINUS',
    '×': 'MULTIPLY',
    '÷': 'DIVIDE',
    '=': 'EQUAL',
    '.': 'DECIMAL',
    'C': 'CLEAR',
    '+/-': 'PLUSMINUS',
    '%': 'PERCENT'

}

export const buttonToValueMap = Object.fromEntries(Object.entries(valueToButtonMap).map(entry => entry.reverse()))

export const buttonGroups = {
    OPERATION: ['PLUS', 'MINUS', 'DIVIDE', 'MULTIPLY', 'PERCENT'],
    FUNCTION: ['CLEAR', 'PLUSMINUS', 'EQUAL'],
    NUMBER: ['ONE','TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'ZERO']
}

export const keyCodeToButtonMap = {
    49: 'ONE',
    50: 'TWO',
    51: 'THREE',
    52: 'FOUR',
    53: 'FIVE',
    54: 'SIX',
    55: 'SEVEN',
    56: 'EIGHT',
    57: 'NINE',
    48: 'ZERO',
    46: 'DECIMAL',
    43: 'PLUS',
    45: 'MINUS',
    47: 'DIVIDE',
    42: 'MULTIPLY',
    37: 'PERCENT',
    67: 'CLEAR',
    99: 'CLEAR',
    61: 'EQUAL',
    13: 'EQUAL'
}