// when to many if else if statements a switch can be cleaner to understand
let day = 'Friday';

if (day === 'Monday') {
    console.log('Start of the work week.');
} else if (day === 'Wednesday') {
    console.log('Midweek already!');
} else if (day === 'Friday') {
    console.log('Almost the weekend!');
} else {
    console.log('Just another day.');
}

day = 'Tuesday';

switch (day) {
    case 'Monday':
        console.log('Start of the work week.');
        break;
    case 'Wednesday':
        console.log('Midweek already!');
        break;
    case 'Friday':
        console.log('Almost the weekend!');
        break;
    default:
        console.log('Just another day.');
        break;
}

// Examples of good use

// if when there is more than a single value to test and it could be complex evaluation of logic
const hour = 10;
if (hour < 12) {
    console.log('Good morning!');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}

// switch for single value -lookup table style
const statusCode = 404;
switch (statusCode) {
    case 200:
        console.log('OK');
        break;
    case 404:
        console.log('Not Found');
        break;
    case 500:
        console.log('Internal Server Error');
        break;
    default:
        console.log('Unknown status code');
        break;
}
