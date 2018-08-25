import './site.css'
import jsonPersons from './persons.json'
import { getPersonHtml } from './person'
import { resolve } from 'path';

const text = ['Juan', 'Fool', 'Free', 'Yorch', 'Fly', 'Mix', 'Eleven', 'Hate', 'Fine', 'Pen']
const getRandom = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min)

const getHTMLNumber = (n) => {
    const num = document.createElement('p')
    num.textContent = (n < 10) ? num.textContent = text[n - 1] : num.textContent = n
    return num
}

const displayElement = (i) => {
    document.getElementById('elements').appendChild(getHTMLNumber(i))
}

const displayWithFor = () => {
    const min = 1
    const max = 20

    const random = getRandom(min, max)
    for (let i = 1; i <= random; i++) {
        displayElement(i)
    }
}

const displayWithWhile = () => {
    const min = 1
    const max = 20

    const random2 = getRandom(min, max)
    let counter = 1
    while (counter <= random2) {
        displayElement(counter)
        counter++
    }
}

const getPersons = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("finished reading persons", jsonPersons)
            if (jsonPersons) {
                resolve(jsonPersons)
            } else {
                reject('Can not read jsonPersons file')
            }
        }, 3000)
    })
}

const displayPeople = (persons) => {
    const people = persons.map(person => getPersonHtml(person));
    document.querySelector('#main').innerHTML = people.join('\n');
}

const renderMain = () => {
    getPersons()
        .then(displayPeople)
        .catch(err => console.error(err))
}

renderMain()