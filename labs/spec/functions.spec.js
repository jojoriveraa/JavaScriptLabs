describe('Functions', () => {
    it('expression', () => {
        expect(expression()).toBeTruthy()
    })
    it('statement', () => {
        expect(statemet()).toBeTruthy()
    })
    it('arrow', () => {
        expect(arrow()).toBeTruthy()
    })
    it('can create a person', () => {
        let person = makePerson("Huge", "Jackman", "thegratestwolverine@jeanvaljean.com", "612711049856")
        expect(person.first).toEqual("Huge")
        expect(person.last).toEqual("Jackman")
        expect(person.email).toEqual("thegratestwolverine@jeanvaljean.com")
        expect(person.phone).toEqual("612711049856")
    })
    it('will throw if no name is passed in', () => {
        expect(() => {
            makePerson(undefined, undefined, "thegratestwolverine@jeanvaljean.com", "612711049856")
        }).toThrow('You are not huge')
    })
    it('will set email to \'no email\' if not provided', () => {
        let person = makePerson("Huge", "Jackman", undefined, "612711049856")
        expect(person.first).toEqual("Huge")
        expect(person.last).toEqual("Jackman")
        expect(person.email).toEqual("no email")
        expect(person.phone).toEqual("612711049856")
    })
    it('will set phone to \'no phone\' if not providec', () => {
        let person = makePerson("Huge", "Jackman", "thegratestwolverine@jeanvaljean.com", undefined)
        expect(person.first).toEqual("Huge")
        expect(person.last).toEqual("Jackman")
        expect(person.email).toEqual("thegratestwolverine@jeanvaljean.com")
        expect(person.phone).toEqual("no phone")
    })
    it('can calculate a factorial', () => {
        expect(factorial(10)).toEqual(3628800)
    })
    it('can calculate three factorials', () => {
        const factorials = factorial(10, 10, 10)
        expect(factorials.length).toEqual(3)
        for (const p of factorials) {
            expect(p).toEqual(3628800)
        }
    })
    it('can calculate 10 factorials', () => {
        const factorials = factorial(10, 10, 10, 10, 10, 10, 10, 10, 10, 10)
        expect(factorials.length).toEqual(10)
        for (const p of factorials) {
            expect(p).toEqual(3628800)
        }
    })
    it('will return 1 if given no parameters', () => {
        expect(factorial()).toEqual(1)
    })
})

const expression = function () {
    return true
}

function statemet() {
    return true
}

const arrow = () => {
    return true
}

const makePerson = (name, surname, mail = "no email", number = "no phone") => {
    if (!name || !surname) {
        throw ('You are not huge')
    } else {
        return {
            first: name,
            last: surname,
            email: mail,
            phone: number
        }
    }
}

const factorial = (...nums) => {
    let values = []
    if (!nums.length) {
        return 1
    } else {
        nums.forEach(num => {
            values.push(getFactorial(num))
        })
    }
    if (nums.length === 1) {
        return values[0]
    }
    return values

}

const getFactorial = (num) => {
    let value = 1;
    for (let n = num; n > 0; n--) {
        value = value * n;
    }
    let v = value;
    return v;
}
