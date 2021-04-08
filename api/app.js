
fetch(`https://jsonplaceholder.typicode.com/users/3`)
    .then(res => res.json())
    .then(data => console.log(data["name"]))









