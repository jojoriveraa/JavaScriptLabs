const fetch = require('node-fetch')

const getPeopleInfo = (n) => fetch(`https://randomuser.me/api/?results=${n}`).then(res => res.json()).then(json => json.results)

const logInfo = (n = 5) => {
    getPeopleInfo(n)
        .then(people => people.forEach(person => console.log(person)))
        .catch(err => console.error(err))
}

logInfo(5)