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
//const game = require('./main/set/games/chess/game_main')
let setGame = {} //This variable is set to the modual include for the game

//Included public moduales


//Code Body ***********************************************************************************************

//Creates link to Game set
module.exports.LinkToGame = function (selected)
{
    setGame["game"] = require(`./main/set/games/${selected}/game_main`)
    com.SendToMenu('game', 'confir', true, 'menu')

    console.log(selected)
    
}

//Deletes link to Game set
module.exports.UnlinkToGame = function () {

}

//Send Data to Game set
module.exports.ToGame = function ()
{
    setGame["game"].TestinIn()
}

//Reseve data frome Game set
module.exports.ToApp = function (msg)
{
    console.log(msg)
}