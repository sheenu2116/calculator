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
