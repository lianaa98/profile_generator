const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) \n', (answer) => {

  profile.name = answer.trim();

  rl.question('What\'s an activity you like doing? \n', (answer2) => {

    profile.activity = answer2.trim();

    rl.question('What do you listen to while doing that? \n', (answer3) => {

      profile.music = answer3.trim();

      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) \n', (answer4) => {

        profile.meal = answer4.trim();

        rl.question('What\'s your favourite thing to eat for that meal? \n', (answer5) => {

          profile.food = answer5.trim();

          rl.question('Which sport is your absolute favorite? \n', (answer6) => {

            profile.sport = answer6.trim();

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer7) => {

              profile.superpower = answer7.trim();
              rl.close();
            });
          });
        });
      });
    });
  });
});


rl.on('close', function() {
  console.log(`This is a profile for ${profile.name}. They enjoy doing ${profile.activity} when they are free. They also love listening to ${profile.music}. ${profile.meal} is their absolute favorite, especially when there is ${profile.food}. They like ${profile.sport}. They also have a secret superpower - ${profile.superpower}!`);

})

