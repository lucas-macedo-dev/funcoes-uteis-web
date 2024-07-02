function getCallerFunctionName() {
    const stack = new Error().stack;
    const stackLines = stack.split('\n');
    const callerLine = stackLines[3];
    const functionNameMatch = callerLine.match(/at (\S+)/);
    return functionNameMatch ? functionNameMatch[1] : 'unknown';
}
