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

contextBridge.exposeInMainWorld('port', foundPorts)

const SortMessage = function (data) {
    console.log('tag: ' + data.tag);

    let retreved = []

    switch (data.tag) {

        case "port":
            console.log('req: ' + data.req);

            switch (data.req) {

                //Fille asyinc Data
                case 'set':
                    foundPorts = grid.boards
                    console.log(foundPorts)
                    foundGames = lFile.readySet

                    break
                case 'all':
                    console.log(data.msg.length);

                    for (var i = 0; i < data.msg.length; i++) {

                        if (i == 0) {
                            retreved[0] = data.msg[i]
                        }
                        else {
                            retreved.push(data.msg[i])
                        }

                        console.log(`ports ${i} Name: ` + retreved[i].name);
                        console.log(`ports ${i} Path: ` + retreved[i].path);

                    }

                    
                    break

                default:
            }
            break

        default:
    }
    console.log(retreved)


};