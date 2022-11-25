class Message {
   constructor(name, commandArray) {

     if (!name) {
       throw Error("Name required.");
     }
     
     this.name = name;
     this.commands = commandArray;
   }
}

module.exports = Message;