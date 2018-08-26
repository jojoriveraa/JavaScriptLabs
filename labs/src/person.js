import { readFileSync } from 'fs'
const template = readFileSync('./src/person-card.html', 'utf8')

class Person {

    constructor(p) {
        this._p = p
    }

    get p() { return this._p }
    get html() { return eval('`' + template + '`') }
}

export default Person     