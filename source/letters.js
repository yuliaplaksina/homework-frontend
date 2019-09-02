'use strict';

function letters(string, mode) {
    let newString;

    switch (mode) {
        case true:
            const uniqueMode1 = new Set(Array.from(string));
            newString = Array.from(uniqueMode1).join('');
            break;

        case false:
            const uniqueMode2 = new Set(Array.from(string).reverse());
            newString = Array.from(uniqueMode2).reverse().join('');
            break;

        default:
            const letters = Array.from(string);
            const map = new Map();

            for (let letter of letters) {
                if (map.has(letter)) {
                    const letterCount = map.get(letter);
                    map.set(letter, letterCount + 1);
                } else {
                    map.set(letter, 1);
                }
            }

            newString = letters.filter(letter => map.get(letter) < 2).join('');
            break;
    }

    return newString;
}
