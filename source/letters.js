'use strict';

function letters(string, mode = null) {
    if (mode) {
        return Array.from(new Set(Array.from(string))).join("");
    }
    if (mode === false) {
        return Array.from(new Set(Array.from(string).reverse())).reverse().join("");
    }

    let letters = Array.from(string);

    let map = new Map();

    for (let letter of letters) {
        if (!map.has(letter)) {
            map.set(letter, +1);
        } else {
            map.set(letter, map.get(letter) + 1);
        }
    }

    return letters.filter( letter => {
        return map.get(letter) < 2;
    }).join("");



}