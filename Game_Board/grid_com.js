/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * This modual handales comunication between the main grid and the Rual Keeper
 * 
 * */

//Included custome moduales

//Included public moduales
const { SerialPort } = require('serialport'); //Moduale to interact with serial ports threw the OS

//modual global Variables
let boards = [];

//Code Body

module.exports.portSerch = async function ()
{
    console.log("Making Promis")
    let promis = SerialPort.list();
    let foundPorts = await promis
    console.log(foundPorts)


    for (var i = 0; i < foundPorts.length; i++)
    {

        if (foundPorts[i].productID == 'EA60')
        {
            boards.push(foundPorts[i])
        }
    }

    console.log(boards)

}