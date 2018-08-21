import './site.css'
import getBrowserInfo from './getBrowserInfo'
alert('hello world 2')
document.getElementById('main').innerHTML = 'hello world'

const min = 5
const max = 20
var counter = 1
const random = Math.floor(Math.random() * (max - min + 1)) + min
const random2 = Math.floor(Math.random() * (max - min + 1)) + min

for (let i = 1; i <= random; i++) {
    let num = document.createElement('p')
    switch (i) {
    case 1:
        num.textContent = 'Juan'
        break
    case 2:
        num.textContent = 'Fool'
        break
    case 3:
        num.textContent = 'Free'
        break
    case 4:
        num.textContent = 'Yorch'
        break
    case 5:
        num.textContent = 'fly'
        break
    case 6:
        num.textContent = 'mix'
        break
    case 7:
        num.textContent = 'eleven'
        break
    case 8:
        num.textContent = 'hate'
        break
    case 9:
        num.textContent = 'fine'
        break
    case 10:
        num.textContent = 'pen'
        break
    default:
        num.textContent = i
        break
    }
    document.getElementById('elements').appendChild(num)
}



while (counter <= random2) {
    let num = document.createElement('p')
    switch (counter) {
    case 1:
        num.textContent = 'Juan'
        break
    case 2:
        num.textContent = 'Fool'
        break
    case 3:
        num.textContent = 'Free'
        break
    case 4:
        num.textContent = 'Yorch'
        break
    case 5:
        num.textContent = 'fly'
        break
    case 6:
        num.textContent = 'mix'
        break
    case 7:
        num.textContent = 'eleven'
        break
    case 8:
        num.textContent = 'hate'
        break
    case 9:
        num.textContent = 'fine'
        break
    case 10:
        num.textContent = 'pen'
        break
    default:
        num.textContent = counter
        break
    }
    document.getElementById('elements').appendChild(num)
    counter++
}

document.getElementById('main').innerHTML = getBrowserInfo()