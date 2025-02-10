function getElementWidth(content, padding, border) {
    let result = 0;

    try {
        result = parseFloat(content) +
            parseFloat(padding) * 2 +
            parseFloat(border) * 2;
    } catch (e) {
        return `Invalid input! Error: ${e.message}`;
    }

    return result;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200