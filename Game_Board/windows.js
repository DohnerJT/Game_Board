/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 *
 * TThis modual is used to navigate the local File Directory to get or save files
 *
 *
 * */

//Included custome moduales

//Included public moduales
const path = require('path');
const { app, BrowserWindow, webContents } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';

let mainWindow

//Code Body ***********************************************************************************************

const WindowLaunch = function ()
{
    //Creates the Window Objecdt
    mainWindow = new BrowserWindow({
        title: 'Game Board Tools',
        width: 750,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, "bridge.js")
        }
    });

    //Show development tools in development mode

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    //Launches
    mainWindow.loadFile(path.join(__dirname, './main/renders/launch_menu/index.html'));


}

module.exports.WindowStart = function ()
{

    app.whenReady().then(() =>
    {
        WindowLaunch()

        app.on('activate', () =>
        {
            if (BrowserWindow.getAllWindows().length === 0)
            {
                WindowLaunch()
            }

        })

    })
}


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

module.exports.SendUp = function (ch, ms)
{
    mainWindow.webContents.send(ch, ms)
}

module.exports.updateMain = function (pathGame)
{
    mainWindow.setSize(1500, 1200);
    mainWindow.loadFile(path.join(__dirname, `./main/set/games/${pathGame}/Renders/rk_ui/index.html`));

}
