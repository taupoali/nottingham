const fetch = require('node-fetch');
//const url = 'https://meowfacts.herokuapp.com/';
const url = 'https://swapi.dev/api/people/';
//const url = 'https://api.unsplash.com/photos/random?count=1'
//const url = 'https://restcountries.com/v3.1/all';
//const url = 'https://v2.jokeapi.dev/joke/Programming';
//const url = 'https://api.spacexdata.com/v4/launches/latest;


/* could also write as 

async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
}
*/  

const fetchData = async () => {
    try {
        const response = await fetch(url);
        //console.log(response);
        const data = await response.json();
        //console.log(data);
        personObject = data.results[0];
        console.log("*************** Here is using the json response as an object")
        console.log(personObject);
        //console.log(data.results[0].name);
        starShips = data.results[0].starships;
        const response2 = await fetch(starShips[0]);
        const data2 = await response2.json();
        console.log("*************** Here is json response from a follow up request using previous output")
        console.log(data2);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

fetchData();




