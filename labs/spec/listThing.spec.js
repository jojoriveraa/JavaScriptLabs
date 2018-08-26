import listThings from "../src/listThings"
describe('list', () => {
    it('can print list', () => {
        const listOfPeople = listThings("div", ["Tahani", "Chidi", "Jianyu"]);
        expect(listOfPeople).toEqual("<div>1. Tahani</div><div>2. Chidi</div><div>3. Jianyu</div>")
    })
    it('can print roman numerals when needed', () => {
        const listOfPeople = listThings("div", ["Tahani", "Chidi", "Jianyu"], true);
        expect(listOfPeople).toEqual("<div>i. Tahani</div><div>ii. Chidi</div><div>iii. Jianyu</div>")
    })
})