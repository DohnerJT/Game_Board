/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * Modual Name:game_back_com

Handales Communication from the Front end of a game to the backend
 *  
 * */

let dirBackPath = "../../../../"
//Included custome moduales
const wins = require(dirBackPath + 'windows');


//Included public moduales
const { ipcMain } = require('electron')



//Code Body ***********************************************************************************************

module.exports.Link = function (channal) {
    ipcMain.on(channal, (e, data) => { SortMessage(data) })
}

const SortMessage = function (data) {

    console.log("Message Frome Game Menue Chess")
    wins.SendUp('game', true)
}