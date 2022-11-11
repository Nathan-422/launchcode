const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // globals
  let rover = null;
  let location = null;

  beforeEach(function() {
    // init globals
    location = Math.round(Math.random() * Math.pow(10, 5));
    rover = new Rover(location);
  });

  // #7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    const arrNew = [rover.position, rover.mode, rover.generatorWatts];
    const arrBaseline = [location, "NORMAL", 110];

    expect(arrNew).toEqual(arrBaseline);
  })

  // #8
  it("response returned by receiveMessage contains name of message", function() {
    const modeChangeNormal = new Command("MODE_CHANGE", "NORMAL");
    const move = new Command("MOVE", 12500);
    const message1 = new Message("Testing time", [modeChangeNormal, move]);

    expect(rover.receiveMessage(message1).message).toEqual("Testing time")
  });

  // #9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    const modeChangeNormal = new Command("MODE_CHANGE", "NORMAL");
    const move = new Command("MOVE", 12500);
    const message1 = new Message("Testing time", [modeChangeNormal, move]);

    expect(rover.receiveMessage(message1).results.length).toEqual(2);
  });

  // #10
  it("responds correctly to status check command", function() {
    const statusCheck = new Command("STATUS_CHECK");
    const statusMessage = new Message("Checking status", [statusCheck]);

    const report = rover.receiveMessage(statusMessage).results[0];
    const status = report.roverStatus;

    const results = [report.completed, status.mode, status.generatorWatts, status.position];

    expect(results).toEqual([true, "NORMAL", 110, location]);
  });

  // #11
  it("responds correctly to mode change command", function() {
    const statusCheck = new Command("STATUS_CHECK");
    const setLowPower = new Command("MODE_CHANGE", "LOW_POWER");
    const sendLowPower = new Message("Switch to low power", [setLowPower, statusCheck]);

    const report = rover.receiveMessage(sendLowPower);
    const status = report.results[1].roverStatus;
    const resultArr = [report.results[0].completed, status.mode];

    expect(resultArr).toEqual([true, "LOW_POWER"]);
  });

  // #12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    const setLowPower = new Command("MODE_CHANGE", "LOW_POWER");
    const moveOneHundred = new Command("MOVE", 100);
    const moveInLowPower = new Message("Move in low power", [setLowPower, moveOneHundred]);

    const report = rover.receiveMessage(moveInLowPower);
    const completed = report.results[1].completed;

    expect(completed).toEqual(false);
  });

  // #13
  it("responds with position for move command", function() {
    const moveFar = new Command("MOVE", 15000);
    const moveMsg = new Message("Move 15,000", [moveFar]);

    const report = rover.receiveMessage(moveMsg);
    const completed = report.results[0].completed;

    expect(completed).toEqual(true);
  });
});
