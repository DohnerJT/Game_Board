/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * This modual handales comunication between the main grid and the Rual Keeper
 * 
 * */

//Included custome moduales
const com = require('./back_com');

//Included public moduales
const { SerialPort } = require('serialport'); //Moduale to interact with serial ports threw the OS

//modual global Variables
let boards = []
let grid



//Code Body


//Creat list of avalable ports. 
module.exports.portSerch = async function ()
{

    let promis = SerialPort.list();
    let foundPorts = await promis

    //Narow list to ports with game boards
    for (var i = 0; i < foundPorts.length; i++)
    {
        if (foundPorts[i].productId == 'EA60')
        {
            let newPort = {
                path: foundPorts[i].path,
                name: foundPorts[i].friendlyName
            }
                boards.push(newPort)            
        }
    }

}

//Conect to Specifiede Port
module.exports.GridLink = function (portPath)
{
    //Create port object
    grid = new SerialPort({ path: portPath, baudRate: 115200 });

    //Create handleres for Newley conected port
    grid.on('open', function () {
        console.log('---Conected----')

        //Date incoming
        grid.on('data', SortGridMsg)

        //Port Error
        grid.on('error', function (e) {
            console.log("Error Message /n/n")
            console.log(e)
        })

        //Port Closed
        grid.on('close', function (e) {
            console.log("Port is closed")
            com.SendToMenu("port", "confirC", true, 'menu')
        })

        //Send port conection confermation to Frontend
        com.SendToMenu('port', 'confir', true, 'menu');
    })


  
}

//Close open port
module.exports.GridDeLink = function ()
{
    grid.close()

}

//Sort incoming data from Game bored
const SortGridMsg = function (data)
{

    console.log(data)

};

module.exports.boards = boards; 