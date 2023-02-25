/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * Bridge:
 *  Modual is used to bridge comunication between the front end and the back end of the application
 * 
 * */

//Included custome moduales
const grid = require('./grid_com');
const lFile = require('./localFile');

//Included public moduales
const { contextBridge, ipcRenderer } = require('electron')


//Code Body ***********************************************************************************************

const SortMessage = function (data) {
    console.log(data)


};

//Front End
contextBridge.exposeInMainWorld('com',
    {
        Link: (channal) => ipcRenderer.on(channal, (data) => {SortMessage(data)}),
        Close: (channal) => ipcRenderer.removeListener(channal),
        Send: (channal, data) => ipcRenderer.send(channal, data)
    })


