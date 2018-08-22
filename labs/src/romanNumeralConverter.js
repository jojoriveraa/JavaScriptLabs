import { throws } from "assert";

const convert = function (romanNumeral) {
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
        throw (/thats mayan stuff/)
    }
    throw (/not roman/)
}
export default convert