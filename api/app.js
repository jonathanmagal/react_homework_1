let sentence = document.getElementById('aaa')
fetch(`https://jsonplaceholder.typicode.com/users/3`)
    .then(res => res.json())
    .then(data => { sentence.innerHTML = `the name of user number 3 is ${data['name']}` })

