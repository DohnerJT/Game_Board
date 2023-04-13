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
module.exports.ToApp = function (msg)
{
    console.log(msg)
}