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
//const grid = require('./grid_com');
const lFile = require('./localFile');

//Included public moduales
const { contextBridge, ipcRenderer } = require('electron')


let foundPorts
let foundGames


//Code Body ***********************************************************************************************


//Front End
contextBridge.exposeInMainWorld('com',
    {
        Link: (channal) => ipcRenderer.on(channal, (e, data) => { SortMessage(data)}),
        Close: (channal) => ipcRenderer.removeListener(channal),
        Send: (channal, data) => ipcRenderer.send(channal, data),
        Send_Wait: (channal) => ipcRenderer.invoke(channal)
    })


const SortMessage = function (data) {
    console.log('tag: ' + data.tag);


    switch (data.tag) {

        case "port":
            console.log('req: ' + data.req);

            switch (data.req) {
                case 'confir':   
                    console.log(data.msg)
                    BannerStatus("na", 'g', )
                    break
                case 'all': 
                    break
                default:
                    break;
            }
            break

        default:
    }
    console.log("Message Data Front" + data)


};