// commands
    // view
        // tree
        // flat
    // organize
    // help

let input = process.argv.slice(2);
let view = require("./commands/view.js");
let help = require("./commands/help.js");
let organize = require("./commands/organize.js");
let cmd = input[0];

switch(cmd){
    case "view":
        view.viewHelper(input[1] , input[2]);
        break;

    case "organize":
        organize.organizeHelper(input[1]);
        break;
    
    case "help":
        help.helpHelper();
        break;

    default:
        console.log("Wrong Command Entered");
        break;
}