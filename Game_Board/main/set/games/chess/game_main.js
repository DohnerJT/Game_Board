/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * This modual is the entry/exit point from the game bridge
 *  
 * */

//Included custome moduales
let dirBackPath = "../../../../"
const game = require(dirBackPath + 'game_bridge')
const wins = require(dirBackPath + 'windows');
const com = require('./game_back_com')



//Included public moduales


//Code Body ***********************************************************************************************

module.exports.FromApp = function (data)
{
    game.ToApp('Hello from Chess')
}

module.exports.ToApp = function ()
{
    
}

module.exports.StartGameApp = function ()
{
    com.Link('game')
}