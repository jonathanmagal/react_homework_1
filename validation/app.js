const username = document.getElementById('name')
const userage = document.getElementById('age')
const form = document.getElementById('form')
const error_name = document.getElementById('name_error')
const error_age = document.getElementById('age_error')
const tea_error = document.getElementById('tea_error')
const coffeb = document.getElementById('coffe')
const browser = document.getElementById('browser')


form.addEventListener('submit', (e) => {
    if (username.value === '' || username.value === null) {
        e.preventDefault()
        error_name.innerText = "name is not valid"
    }

    if (username.value.length < 2) {
        e.preventDefault()
        error_name.innerText = "name is must be greater than 2 char"
    }

    if (username.value.length > 2 && username.value !== 'yogev') {
        error_name.innerText = ""
    }

    if (username.value === 'name' || username.value === 'yogev') {
        e.preventDefault()
        error_name.innerText = "name is must be cool"
    }

    if (userage.value < 16) {
        e.preventDefault()
        error_age.innerText = "you are too young"
    }

    if (userage.value > 16) {
        error_age.innerText = ""
    }

    if (!coffeb.checked) {
        e.preventDefault()
        tea_error.innerText = "sorry we only love coffe"
    }

    if (coffeb.checked) {
        tea_error.innerText = ""
    }

    if (browser.value !== 'Safari') {
        e.preventDefault()
        browser_error.innerText = "sorry we only accept safari users..."
    }

    if (browser.value === 'Safari') {
        browser_error.innerText = ""
    }


})



