//const url = 'https://api.spacexdata.com/v4/launches/latest';
const url = 'https://swapi.dev/planets'
const fetch = require('node-fetch');


// synchronous function - so we won't see we're done until we get the response 
function fetchData() {

    const response = fetch(url);
    const data = response.json();
};


fetchData();
console.log("we're done")