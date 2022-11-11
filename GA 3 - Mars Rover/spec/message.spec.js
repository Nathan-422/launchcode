const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

  let command1;
  let command2;
  let commands;
  let commandsCopy;

  beforeEach(function() {
    command1 = new Command("MODE_CHANGE", "LOW_POWER");
    command2 = new Command("MOVE", 12000);
    commands = [command1, command2];
    commandsCopy = commands.slice(0);
  });

  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect(function() { new Message(); }).toThrow(new Error("Name required."))
  });

  it("constructor sets name", function() {
    let messageName = new Message("Two commands", commands).name;
    expect(messageName).toEqual("Two commands");
  });

  it("contains a commands array passed into the construcor as 2nd argument", function() {
    let messageCommands = new Message("Name", commands).commands;
    expect(messageCommands).toEqual(commandsCopy);
  });

});
