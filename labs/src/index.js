import './site.css'
import peopleJSON from './persons.json'
import Person from './person'

const renderPersonCard = (person, atTop) => {
    if (atTop) {
        document.querySelector('#main').innerHTML = person.html + document.querySelector('#main').innerHTML
    }else {
        document.querySelector('#main').innerHTML += person.html
    }
}

const renderPeopleList = (people) => people.forEach(person => renderPersonCard(new Person(person)))

const getSavedPeopleJSON = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('finished reading persons', peopleJSON)
            if (peopleJSON) {
                resolve(peopleJSON)
            } else {
                reject('Can not read jsonPersons file')
            }
        }, 3000)
    })
}

const readPersonData = (form) => {
    return new Person({
        name: {
            first: form.first.value,
            last: form.last.value
        },
        email: form.email.value,
        phone: form.phone.value,
        cell: form.phone.value,
        picture: {
            large: form.photoUrl.value
        },
        location: {}
    })
}


const renderMain = () => {
    getSavedPeopleJSON()
        .then(renderPeopleList)
        .catch(err => console.error(err))
}

const getPersonsAsync = async () => new Promise(resolve => { setTimeout(() => resolve(peopleJSON), 3000) })

const renderMainAsync = async () => {
    try {
        const people = await getPersonsAsync()
        renderPeopleList(people)
    } catch (err) {
        console.error(err)
    }
}

document.querySelector('#addPerson').addEventListener('submit', function (e) {
    e.preventDefault()
    const form = e.target
    const personData = readPersonData(form)
    renderPersonCard(personData, true)
    form.reset()
})

renderMain()
renderMainAsync()