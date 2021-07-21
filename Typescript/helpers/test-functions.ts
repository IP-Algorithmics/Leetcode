export function test(result: any, expected: any) {
    const isEqualText = (isEqual(result, expected) ? ['Passed', ConsoleColors.Green] : ['Failed', ConsoleColors.Red]) as [string, ConsoleColors];
    const expectedText = [`Expected:${expected}`, ConsoleColors.Blue] as [string, ConsoleColors];
    const resultText = [`Result:${result}`, ConsoleColors.Cyan] as [string, ConsoleColors];
    colorLog([isEqualText, expectedText, resultText]);
}

function isEqual(result: any, expected: any) {
    if (result instanceof Array) {
        return result.length === expected.length && result.every((item, index) => isEqual(item, expected[index]));
    }
    if (result instanceof Object) {
        return Object.keys(result).every((key) => isEqual(result[key], expected[key]));
    }
    return result === expected;
}
function color(text: string, color: ConsoleColors) {
    return [color, text, ConsoleColors.Reset];
}

function colorLog(inputs: Array<[string, ConsoleColors]>) {
    const texts = inputs.map((item) => color(item[0], item[1])).flat();
    console.log(...texts);
}

const enum ConsoleColors {
    Reset = '\x1b[0m',
    Bright = '\x1b[1m',
    Dim = '\x1b[2m',
    Underscore = '\x1b[4m',
    Blink = '\x1b[5m',
    Reverse = '\x1b[7m',
    Hidden = '\x1b[8m',
    Black = '\x1b[30m',
    Red = '\x1b[31m',
    Green = '\x1b[32m',
    Yellow = '\x1b[33m',
    Blue = '\x1b[34m',
    Magenta = '\x1b[35m',
    Cyan = '\x1b[36m',
    White = '\x1b[37m',

    BgBlack = '\x1b[40m',
    BgRed = '\x1b[41m',
    BgGreen = '\x1b[42m',
    BgYellow = '\x1b[43m',
    BgBlue = '\x1b[44m',
    BgMagenta = '\x1b[45m',
    BgCyan = '\x1b[46m',
    BgWhite = '\x1b[47m',
}
