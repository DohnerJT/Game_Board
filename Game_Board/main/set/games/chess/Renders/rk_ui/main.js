


let grid =  []
let colLength = 8
let rowLength = 8


const SetUp = function () {

    BuildBoard();
    BuildMainGrid();


    //Creat link with the back end for Menu
    //menu events
    $(document).delegate("#scanButton", "click", RequestScan)
    $(document).delegate(".token", "click", ShowMoves)


}

const BuildBoard = function ()
{
    let axisLable = true
    let axisLableValues = ["", "A", "B", "C", "D", "E", "F", "G", "H"];

    let xValue = -1;
    let darkLIGHT = true;

    let gridTag = "#gameBoard";
    let grid = "";
    

    //colem iteration
    for (var c = 0; c < colLength+1; c++) {
        let yValue = 8;
        let rowMake = ""

        if (c%2) {
            darkLIGHT = true
        }
        else {
            darkLIGHT = false
        }

        console.log(darkLIGHT)

        //Row Iteration
        for (var r = 0; r < rowLength+1; r++) {
            let tile = ""

            //Make y Axis lable
            if (axisLable) {
                tile = `<div class="TileH " style = "grid-row: ${r + 1}/${r + 2}; grid-column: ${c + 1}/${c + 2};" >${axisLableValues[r]} </div>`
            }
            //Make x Axis lable and Body Tiles
            else {
                //Make x Axis lable Tile
                if (!r) {
                    tile = `<div class="TileH " style = "grid-row: ${r + 1}/${r + 2}; grid-column: ${c + 1}/${c + 2};" >${c} </div>`
                }
                //Make Body Tile
                else {
                    let tileColor

                    if (darkLIGHT) {
                         tileColor = "TileB"
                    }
                    else {
                         tileColor = "TileW"

                    }
                    darkLIGHT = !darkLIGHT
                    tile = `<div class="${tileColor} " id="x-${xValue}_y-${yValue}" style = "grid-row: ${r + 1}/${r + 2}; grid-column: ${c + 1}/${c + 2};" > </div>`
                }

            }
            //End of tile making
            console.log(tile)

            //Add Tile To Row
            rowMake += tile
            yValue -= 1;

        }
        //End Row making

        //set x Axis labeling to finished and keep it ther
        axisLable = false

        //Add row to Grid
        grid += rowMake
        xValue += 1;
    }
    //End Grid making

    //Display the made Grid
    $(gridTag).append(grid);

};

//Send Scan Request to back end of Game
const RequestScan = function (e){
    console.log(e.currentTarget.value)
//Request Inital or Play scan    
    //if (inital) {
    //    Send("port", 'scanI', null)
    //}
    //else{
    //    Send("port", 'scanP', null)
    //}
    

}







$(document).ready(SetUp);
