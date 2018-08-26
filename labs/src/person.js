import { readFileSync } from 'fs'
const template = readFileSync('./src/person-card.html', 'utf8')

class Person {
    // constructor takes a 'person' object and store with _p key
    constructor(p) {
        this._p = p
    }
    // getters ans setters
    get p() { return this._p }
    get html() { return eval('`' + template + '`') }
}

export default Person     