/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 *  Modual is used to handal communicationf from the front end and sending to the front end
 * 
 * */

//Included custome moduales
const grid = require('./grid_com');
const lFile = require('./localFile');

//Included public moduales
const { ipcMain } = require('electron')

module.exports.Link = function (channal)
{

    ipcMain.on(channal, (data) => {SortMessage(data)})
   

}

const SortMessage = function (data)
{

    console.log(data)

};