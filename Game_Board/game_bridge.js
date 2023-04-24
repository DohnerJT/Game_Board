/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * This modual is used to link a games rule set to the active app
 *  -Games sets are dynamicaley added to this modual
 *  -Information is passed to this modual and then passed to the games rule set moduals
 *  
 * */

//Included custome moduales
const grid = require('./grid_com');
const com = require('./back_com');
const wins = require('./windows');
let setGame = {} //This variable is set to the modual include for the game

let gamePath //This variable 

//Included public moduales


//Code Body ***********************************************************************************************

//Creates link to Game set
module.exports.LinkToGame = function (selected)
{
    setGame["game"] = require(`./main/set/games/${selected}/game_main`)
    com.SendToMenu('game', 'confir', true, 'menu')

    gamePath = selected
    console.log(selected)
    
}

//Deletes link to Game set
module.exports.UnlinkToGame = function () {
    setGame = {}
    selected = ""
    com.SendToMenu('game', 'confirC', true, 'menu')
}

module.exports.LaunchGame = function ()
{
    wins.updateMain(gamePath);
    setGame["game"].StartGameApp();
}

//Send Data to Game set
module.exports.ToGame = function (data)
{
    setGame["game"].FromApp(data)
}

//Receve data frome Game set
module.exports.ToApp = function (target, instruction, hello)
{
    let msgRaw
    let msg
    console.log("\nGame Bridge Data")
    console.log(hello)
    //Sort Messages from Game App
    switch (target) {
        
        //Requesting Actions from Grid
        case "port":

            switch (instruction) {

                case 'I':
                    console.log("Initial Scan")
                    msgRaw = { a: instruction, d: hello }
                    msg = JSON.stringify(msgRaw);
                    grid.SendTOGrid(msg)
                    break
                case 'P':
                    console.log("Play Scan")
                    msgRaw = { a: instruction, d: hello }
                    msg = JSON.stringify(msgRaw);
                    grid.SendTOGrid(msg)
                    break
                case 'S':
                    console.log("show")                   
                    msgRaw = { a: instruction, d: hello  }
                    msg = JSON.stringify(msgRaw);
                    grid.SendTOGrid(msg)
                    break
                default:
            }
            break

        default:
    }
}