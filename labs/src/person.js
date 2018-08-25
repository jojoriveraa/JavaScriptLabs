import { readFileSync } from 'fs'
const template = readFileSync('./src/person-card.html', 'utf8')

const getPersonHtml = (p) => eval('`' + template + '`')

export { getPersonHtml }    