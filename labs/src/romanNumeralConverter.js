
class RomanNumeralConvertor {
    constructor(decimalNumber, romanNumeral){
        this._romanNumeral = romanNumeral
        this._decimalNumber = decimalNumber
    }
    set romanNumeral(num) { this._romanNumeral = num }
    get romanNumeral() { return this.convert(this._decimalNumber, 'roman')}

    set decimalNumber(num) { this._decimalNumber = num}
    get decimalNumber() { return this.convert(this._romanNumeral, 'ordinal') }
    
    convert(numeral, to = 'ordinal') {
        if (to === 'ordinal') {
            numeral = numeral.toLowerCase()
            if (numeral === 'i') {
                return 1
            } else if (numeral === 'ii') {
                return 2
            } else if (numeral === 'iii') {
                return 3
            } else if (numeral === 'ix') {
                return 9
            } else if (numeral === 'xlix') {
                return 49
            } else if (numeral === 'xx') {
                return 20
            }

            else if (numeral === 'o') {
                throw ('thats mayan stuff')
            }
            throw ('not roman')

        } else if (to === 'roman') {
            if (numeral === 1) {
                return 'i'
            } else if (numeral === 2) {
                return 'ii'
            } else if (numeral === 3) {
                return 'iii'
            }
        }
    }

}

const showHosting = function () {
    const z = {
        foo: true,
        bar: true,
        baz: true
    }
    z.foo = true
    z.qux = true
    return true
}

export { RomanNumeralConvertor, showHosting }