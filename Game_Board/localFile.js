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
const fs = require('fs'); 


let readySet

//Code Body ***********************************************************************************************

module.exports.openFile = function (target)
{
    let raw = fs.readFileSync(path.join(__dirname, target));
    readySet = JSON.parse(raw)
    console.log(readySet)
}



module.exports.readySet = readySet;