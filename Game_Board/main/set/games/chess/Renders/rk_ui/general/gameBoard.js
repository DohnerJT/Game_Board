
class tile {
    tag;
    LED = [];
    constructor(x, y) {
        this.tag = `#x-${x}_y-${y}`
    }

    GetLED() {
        let targets = []
        this.LED.forEach((LED) => {
            targets.push(LED.n)
        })
        return targets
    }
}

class LED {
    n;
    r = 0;
    g = 0;
    b = 0;
    check = 0
    constructor(number) { this.n = number }
    Set(color) {
        if (this.r > 0 && this.g < 0) {
            return
        }

        switch (color) {
            case 'G':
                this.r = 0;
                this.g = 255;
                this.b = 0;
                this.check = this.r + this.g + this.b
                break
            case 'A':
                this.r = 0;
                this.g = 0;
                this.b = 255;
                this.check = this.r + this.g + this.b
                break
            case 'R':
                this.r = 255;
                this.g = 0;
                this.b = 0;
                this.check = this.r + this.g + this.b
                break
            default:
        }
    }

    Clear() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.check = 0;
    }
}

let LEDArray = []
let mainGrid = []

let LEDrow = 8
let LEDcol = 16
//Build Main Grid
const BuildMainGrid = function () {
    //Add tiles to Main Grid
    for (var x = 0; x < rowLength; x++) {
        let row =[]
        for (var y = 0; y < colLength; y++) {
            let tileMade = new tile(x, y)
            row.push(tileMade)
        }
        mainGrid.push(row)
    }

    //make LED Array
    for (var i = 0; i < (LEDcol * LEDrow); i++) {
        LEDArray.push(new LED(i))
    }

    //Asign LED's to Tiles
    //Led Colome Number
    let LEDcount = 0
    console.log(mainGrid)
    for (var col = 0; col < LEDcol; col++) {

        let x = Math.trunc(col / 2)
        

        //LED Row Number Top To bottome for one Tiles
        if (col == 0) {
            for (var y = 0; y < LEDrow; y++) {
                console.log(LEDArray[LEDcount])

                console.log(`X: ${x} Y: ${y}`)
                mainGrid[x][y].LED.push(LEDArray[LEDcount])
                LEDcount++
            }
        }
        else if (col % 2)
        {
            for (var y = LEDrow - 1; y >= 0; y--)
            {
                console.log(LEDArray[LEDcount])

                console.log(`X: ${x} Y: ${y}`)
                mainGrid[x][y].LED.push(LEDArray[LEDcount])   
                if (y != 0)
                {
                    let yUp = y - 1
                    mainGrid[x][yUp].LED.push(LEDArray[LEDcount])   

                }
                LEDcount++
            }
        }
        //LED Row Number bottom To top for two Tiles
        else {            
            for (var y = 0; y < LEDrow; y++) {
                console.log(LEDArray[LEDcount])

                console.log(`X: ${x} Y: ${y}`)

                mainGrid[x][y].LED.push(LEDArray[LEDcount])

                let xUp = x - 1
                console.log(`and X: ${xUp} Y: ${y}`)

                mainGrid[xUp][y].LED.push(LEDArray[LEDcount])

                LEDcount++
            }

        }
        console.log('\n\n')
    }
    console.log(mainGrid)

    
}

//Initale Filling of GUI Game Bored
const AddToBoard = function (img, name, target, roster) {

    let boardToken = `<img src="${img}" id = "${name}" height="80px" >`
    $(target).append(boardToken)
    $(roster).removeClass("tokenUnasigned")

};

//Update the GUI Game Bored
const UpdateBoard = function (token, toTile)
{
    let obj = $(`#${token}`).detach()
   $(obj).appendTo(toTile)

};

//Remove token from Boared and Cross out Roster Item
const RemoveFromBoard = function (target, roster) {
    let nameID = '#' + target
    let crossOut = '<img src="lib/strick.png" class="strick" height="80px" > '
    $(nameID).remove()
    $(roster).append(crossOut)
    console.log(target + ' Removed')
    console.log(roster + ' Cross Out')

}

const ShowMoves = function (e) {
    //Get id of clicked and format to match TokenObj.rName
    let target = '#' + e.currentTarget.id
    let moves = []
    let setLED = []
    let targetTag

    ClearLEDs()
    //Serch for token object in History Array
    for (var i = 0; i < tokenHistory.length; i++) {

        if (target == tokenHistory[i].rName) {
            moves = tokenHistory[i].movesAvalable   
            targetTag = tokenHistory[i].docTag
            break
        }
    }

    //Set Self tile to Green
    setLED = FindLEDsOnTile(targetTag)
    LightLEDShowLED(setLED, targetTag, 'G')

    //Set move tiles to Amber or Red
    console.log("Found Moves:")
    console.log(moves)

    moves.forEach((setThis) => {
        setLED = FindLEDsOnTile(setThis.tial)
        if (setThis.a == 'O') {
            LightLEDShowLED(setLED, setThis.tial, 'A')
        }
        else if (setThis.a == 'A') {
            LightLEDShowLED(setLED, setThis.tial, 'R')
        }

    })
    
    console.log("LED Array:")
    console.log(LEDArray)
    SendLEDs()
}

const FindLEDsOnTile = function(target){

    for (var x = 0; x < 8; x++) {

        for (var y = 0; y < 8; y++) {

            if (target == mainGrid[x][y].tag) {
                return mainGrid[x][y].GetLED()
            }
        }
    }
}

const LightLEDShowLED = function (LEDs, tag, color) {
    target = $(tag)
    console.log("LEDs sent:")
    console.log(LEDs)

    switch (color) {
        case 'G':
            target.css("border", "4px solid green")
            LEDs.forEach((led) => {
                LEDArray[led].Set('G')
            })
            break
        case 'A':
            target.css("border", "4px solid blue")
            LEDs.forEach((led) => {
                console.log("LED number:")
                console.log(led)
                LEDArray[led].Set('A')
            })
            break
        case 'R':
            target.css("border", "4px solid red")
            LEDs.forEach((led) => {
                LEDArray[led].Set('R')
            })
            break
        default:
    }
}

const ClearLEDs = function(){
    mainGrid.forEach((col) => {
        col.forEach((tile) => {
            let target = $(tile.tag)
            target.css('border',"")
        })
    })
    LEDArray.forEach((LED) => {
        LED.Clear()
    })
    console.log(LEDArray)
    SendLEDs()
}

const SendLEDs = function () {
    let message = []
    LEDArray.forEach((LED) => {
        if (LED.check > 0) {
            let obj = {
                n: LED.n,
                r: LED.r,
                g: LED.g,
                b: LED.b,
            }
            message.push(obj)
        }
    })
    //console.log(madMessage)
    Send('port', 'show', message)
}