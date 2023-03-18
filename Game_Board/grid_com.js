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



module.exports.portSerch = async function ()
{

    let promis = SerialPort.list();
    let foundPorts = await promis

    //console.log(foundPorts)


    for (var i = 0; i < foundPorts.length; i++)
    {
        let j = true

        if (foundPorts[i].productId == 'EA60')
        {
            let newPort = {
                path: foundPorts[i].path,
                name: foundPorts[i].friendlyName
            }

                boards.push(newPort)
 
            
        }
    }

    console.log("\n Good Boards \n")

    for (var i = 0; i < boards.length; i++)
    {
        console.log(boards[i].name)
    }

}

//Conect to Specifiede Port
module.exports.GridLink = function (portPath)
{
    console.log(portPath)
    grid = new SerialPort({ path: portPath, baudRate: 9600 });

    //Create handleres for Newley conected port
    grid.on('open', function () {
        console.log('---Conected----')

        grid.on('data', SortGridMsg)

        grid.on('error', function (e) {
            console.log("Error Message /n/n")
            console.log(e)
        })

        com.SendToMenu('port', 'confir', true, 'menu');
    })


  
}

const SortGridMsg = function (data)
{

    console.log(data)

};

module.exports.boards = boards; 