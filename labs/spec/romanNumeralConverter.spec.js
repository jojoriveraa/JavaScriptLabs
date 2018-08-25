import { RomanNumeralConvertor, showHosting } from '../src/romanNumeralConverter';
import { parse } from 'querystring';

describe('Roman numeral converter', () => {
    const convertor = new RomanNumeralConvertor()
    it('will return 1 when given i', () => {
        let actual = convertor.convert('i');
        expect(actual).toEqual(1);
    })
    it('will return 2 when given ii', () => {
        let actual = convertor.convert('ii');
        expect(actual).toEqual(2);
    })
    it('will return 9 when given ix', () => {
        let actual = convertor.convert('ix');
        expect(actual).toEqual(9);
    })
    it('will return 20 when given xx', () => {
        let actual = convertor.convert('xx');
        expect(actual).toEqual(20);
    })
    it('will return 49 when given xlix', () => {
        let actual = convertor.convert('xlix');
        expect(actual).toEqual(49);
    })
    it('will return is not roman when il is sent', () => {
        expect(() => {
            convertor.convert('il')
        }).toThrow('not roman')
    })
    it('will return thats mayan stuff when o is sent', () => {
        expect(() => {
            convertor.convert('o')
        }).toThrow('thats mayan stuff')
    })
    it('is case insensitive', () => {
        let a = convertor.convert('xx')
        let b = convertor.convert('XX')
        expect(a).toEqual(b)
    })
    it('will return true', () => {
        expect(showHosting()).toBeTruthy()
    })
    it("should convert roman to decimal using a setter and getter", () => {
        convertor.romanNumeral = "iii";
        expect(convertor.decimalNumber).toEqual(3);
    })

    it("should convert decimal to roman using a setter and getter", () => {
        convertor.decimalNumber = 3;
        expect(convertor.romanNumeral).toEqual("iii");
    })
})