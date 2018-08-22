import { convert, showHosting } from '../src/romanNumeralConverter';
import { parse } from 'querystring';

describe('Roman numeral converter', () => {
    it('will return 1 when given i', () => {
        let actual = convert('i');
        expect(actual).toEqual(1);
    })
    it('will return 2 when given ii', () => {
        let actual = convert('ii');
        expect(actual).toEqual(2);
    })
    it('will return 9 when given ix', () => {
        let actual = convert('ix');
        expect(actual).toEqual(9);
    })
    it('will return 20 when given xx', () => {
        let actual = convert('xx');
        expect(actual).toEqual(20);
    })
    it('will return 49 when given xlix', () => {
        let actual = convert('xlix');
        expect(actual).toEqual(49);
    })
    it('will return is not roman when il is sent', () => {
        expect(() => {
            convert('il')
        }).toThrow('not roman')
    })
    it('will return thats mayan stuff when o is sent', () => {
        expect(() => {
            convert('o')
        }).toThrow('thats mayan stuff')
    })
    it('is case insensitive', () => {
        let a = convert('xx')
        let b = convert('XX')
        expect(a).toEqual(b)
    })
    it('will return true', () => {
        expect(showHosting()).toBeTruthy()
    })
})