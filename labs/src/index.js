import './site.css'
import Person from './person'

const renderPersonCard = (person, atTop) => {
    if (atTop) {
        document.querySelector('#main').innerHTML = person.html + document.querySelector('#main').innerHTML
    } else {
        document.querySelector('#main').innerHTML += person.html
    }
}

const renderPeopleList = (people) => people.forEach(person => renderPersonCard(new Person(person)))

const getPeopleInfo = (n) => fetch(`https://randomuser.me/api/?results=${n}`).then(res => res.json()).then(json => json.results)

const getPeopleInfoAsync = async (n) => fetch(`https://randomuser.me/api/?results=${n}`).then(res => res.json()).then(json => json.results)

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


const renderMain = (n = 5) => {
    getPeopleInfo(n)
        .then(renderPeopleList)
        .catch(err => console.error(err))
}


const renderMainAsync = async (n = 5) => {
    try {
        const peopleInfo = await getPeopleInfoAsync(n)
        renderPeopleList(peopleInfo)
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

renderMain(5)
renderMainAsync(5)