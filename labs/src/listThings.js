import { convert, showHosting } from '../src/romanNumeralConverter';
const listThings = function (tag, people, toRoman = false) {
    var mens = ""
    if (!toRoman) {
        for (const p in people) {
            mens = mens + `<${tag}>${+p + 1}. ${people[p]}</${tag}>`
        }
    } else {
        for (const p in people) {
            mens = mens + `<${tag}>${convert(+p + 1, 'roman')}. ${people[p]}</${tag}>`
        }
    }
    return mens
}
export default listThings