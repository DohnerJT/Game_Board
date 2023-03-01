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
const wins = require('./windows');


//Included public moduales
const { ipcMain, webContents } = require('electron')

//Modual Prototype objects
class message {
    constructor(tag, req, msg) {

        this.tag = tag;
        this.req = req;
        this.msg = msg;
    }
}

module.exports.Link = function (channal)
{
    ipcMain.on(channal, (e, data) => { SortMessage(data) })
}

ipcMain.handle("port/all", async (event, args) => {
    return grid.boards;
});

ipcMain.handle("game/all", async (event, args) => {
    return lFile.readySet;
});

//Sort Incoming Messages to the Back End
const SortMessage = function (data)
{

    switch (data.tag)
    {
        case 'port':

            switch (data.req) {

                case "con":
                    //console.log(data.msg)
                    grid.GridLink(data.msg)
                    break
                default:
            }
            break
        default:
    }


};

