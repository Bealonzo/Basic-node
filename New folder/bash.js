const commands = require('./commands.js');

//prompt the user for input
process.stdout.write('prompt > ');

//the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  //evaluateCmd is a function which will be implemted in commands.js
  commands.evaluateCmd(userInput);
});