const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



rl.question(`What's your name?`, name => {

  x = name;
  if (x ==='bob') {
    console.log(`Hi bobby boy`);
  }
  else {
    console.log(`Hi ${name}`);
  }
  rl.close();
});

