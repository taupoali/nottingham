const fetch = require('node-fetch');
url = 'http://api.weatherstack.com/current?access_key=xxxxxquery=London';

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

fetchData();