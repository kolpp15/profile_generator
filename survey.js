const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (nickname) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (listen) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc) `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (eat) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (power) => {

              console.log(`${nickname} likes to ${activity} while listening to ${listen}. ${nickname}'s favourite meal is ${meal} and to eat ${eat}. ${nickname}'s favorite sport is ${sport}. Lastly, ${nickname}'s superpower is ${power}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});