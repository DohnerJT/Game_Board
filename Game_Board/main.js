/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * This is the main modual from which the application is launched and run
 * 
 * 
 * */

//Included custome moduales
const grid = require('./grid_com');
const lFile = require('./localFile');
const wins = require('./windows');
const com = require('./back_com');

//Included public moduales

//Code Body ***********************************************************************************************

//Get a list of avalable Ports
grid.portSerch(); //See grid_com.js modual

//Get a list of avalable Games
lFile.openFile("/main/set/games/game_sets.json")

//Build and launch Main menu
wins.WindowStart()

//Build Back to Front Channal 
com.Link("menu");
