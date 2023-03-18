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
const games = require('./game_bridge');



//Included public moduales
const { ipcMain, webContents } = require('electron')

//Modual Prototype objects

    /**
     * Message Prototype
     *  tag: Relevent Party on Front end
     *  req: Requested Action Type 
     *  msg: Data for Relevent party requested action
     */

class message {
    constructor(tag, req, msg) {

        this.tag = tag;
        this.req = req;
        this.msg = msg;
    }
}

//Front end Link For
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

//MENU: Sort Incoming Messages from the frontend to the Back End
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
                case "close":
                    grid.GridDeLink()
                    break
                default:
            }
            break

        case 'game':

            switch (data.req) {

                case 'set':
                    //console.log(data.msg)
                    games.LinkToGame(data.msg)
                    break
                case 'close':
                    games.UnlinkToGame()
                    break
                default:
                    break
            }

        default:
    }


};

//Send messages to the front end
module.exports.SendToMenu = function (tag, req, msg, cha)
{
    let ms = new message(tag, req, msg)
    console.log("Made Message Back" + ms)

    wins.SendUp(cha, ms)
 
}