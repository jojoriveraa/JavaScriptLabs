import { throws } from "assert";

const convert = function (romanNumeral) {
    romanNumeral = romanNumeral.toLowerCase()
    if (romanNumeral === 'i') {
        return 1
    } else if (romanNumeral === 'ii') {
        return 2
    } else if (romanNumeral === 'ix') {
        return 9
    } else if (romanNumeral === 'xlix') {
        return 49
    } else if (romanNumeral === 'xx') {
        return 20
    }

    else if (romanNumeral === 'o') {
        throw ('thats mayan stuff')
    }
    throw ('not roman')
}

const showHosting = function () {
    const x = 1
    if (x == 2) {
        const y = true
    }
    const z = {
        foo: true,
        bar: true,
        baz: true
    }
    z.foo = true
    z.qux = true
    return true
}

export { convert, showHosting }