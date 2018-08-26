import './site.css'
import jsonPersons from './persons.json'
import { Person } from './person'

const getPersons = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('finished reading persons', jsonPersons)
            if (jsonPersons) {
                resolve(jsonPersons)
            } else {
                reject('Can not read jsonPersons file')
            }
        }, 3000)
    })
}

const displayPeople = (persons) => {
    const people = persons.map(p => new Person(p).html)
    document.querySelector('#main').innerHTML = people.join('\n')
}

const renderMain = () => {
    getPersons()
        .then(displayPeople)
        .catch(err => console.error(err))
}

renderMain()