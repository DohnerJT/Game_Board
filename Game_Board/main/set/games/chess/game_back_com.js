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
const gameBank = require('./game_main')

//Included public moduales
const { ipcMain } = require('electron')



//Code Body ***********************************************************************************************

module.exports.Link = function (channal) {
    ipcMain.on(channal, (e, data) => { SortMessage(data) })
}

//Sort mesages from the Front End
const SortMessage = function (data) {
    let msg = []
    let target = data.tag
    
    
    console.log("Back Com")
    console.log(msg)
    
    switch (data.tag) {
        case "port":

            switch (data.req) {
                case "scanI":
                    gameBank.ToApp(target, 'I', 'Hello From Inital')
                    break
                case "scanP":
                    gameBank.ToApp(target, 'P', 'Hello From play')
                    break
                case "show":                    
                    gameBank.ToApp(target, 'S', data.msg)
                    break

                default:
            }
            break

        default:
    }

}

module.exports.ToFrontEnd = function (msg)
{
    wins.SendUp('game', msg)

}