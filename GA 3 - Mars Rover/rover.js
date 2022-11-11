class Rover {

  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  };

  /**
  *
  * @param {Message} message The message to be read
  * @returns {Object} 
  */

  receiveMessage(message) {

    let report = {
      message: message.name,
      results: [],
    };

    for (let command of message.commands) {

      switch (command.commandType) {
        case 'MOVE':
          let completed;
          switch (this.mode) {
            case "NORMAL":
              this.position += command.value;
              completed = true;
              break;
            case "LOW_POWER":
              completed = false;
              break;
          }      
          report.results.push({completed});
          break;
          
        case 'STATUS_CHECK':
          report.results.push({
            completed: true,
            roverStatus: {
              mode: this.mode,
              generatorWatts: this.generatorWatts,
              position: this.position,
            },
          });
          break;
          
        case 'MODE_CHANGE':
          let complete = false;
          switch(command.value) {
            case "NORMAL":
              this.mode = "NORMAL";
              complete = true;
              break;
            case "LOW_POWER":
              this.mode = "LOW_POWER";
              complete = true;
              break;
          }
          report.results.push({completed: complete});
          break;
      }
    }



    return report;
  }

};




export default Rover;