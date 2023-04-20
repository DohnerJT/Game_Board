

let inital = true
let tokenHistory = []

//Updates token objects when scan message come in
const UpdatTokents = function (data) {

    //Parse the Raw Data
    let scan = ParseData(data)
    console.log("returned Data\n")
    console.log(scan)

    //Identifey Inital or Play scan
    //Initial Scan
    if (inital) {
        //Performes iniatle filling of History Variable
        FillHistory(scan)

        //Using the History Variable, Asignes roles to tokens and populates 
        //the game Boared on the ui
        SetBoard()

        console.log(tokenHistory)
        inital = false
    }
    //Play Scan
    else {

        NewVsOld(scan)
    }

}

//Parse String to JSON
const ParseData = function (raw)
{
    let data = JSON.parse(raw)
    return data
    

};

//For inital Scan Filles the History 
const FillHistory = function (scan)
{

    scan.forEach((obj) => {
        let token = new TokenObj(obj.x, obj.y, obj.ID)
        tokenHistory.unshift(token)
    })

};

//Setup Boared For the first time
const SetBoard = function () {
    tokenHistory.forEach((token) => {

        switch (token.x) {

            case 0: //White back row
                switch (token.y) {

                    case 0://Rook2
                        token.type = new Rook
                        token.name = "whiteRook_2"
                        token.rName = "#w" + "Rook_2"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 7://Rook1
                        token.type = new Rook
                        token.name = "whiteRook_1"
                        token.rName = "#w" + "Rook_1"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 1: //Knight2
                        token.type = new Knight
                        token.name = "whiteKnight_2"
                        token.rName = "#w" + "Knight_2"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 6: //Knight1
                        token.type = new Knight
                        token.name = "whiteKnight_1"
                        token.rName = "#w" + "Knight_1"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 2: //Bishope2
                        token.type = new bishop
                        token.name = "whiteBishop_2"
                        token.rName = "#w" + "Bishop_2"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 5: //Bishope1
                        token.type = new bishop
                        token.name = "whiteBishop_1"
                        token.rName = "#w" + "Bishop_1"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 3: //Queen
                        token.type = new Queen
                        token.name = "whiteQueen"
                        token.rName = "#w" + "Queen"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 4: //King
                        token.type = new King
                        token.name = "whiteKing"
                        token.rName = "#w" + "King"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    default:
                        break
                }
                break
            case 6: //black Pawn Row

                switch (token.y) {
                    case 0://Pawn 8
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "1"
                        token.rName = "#b" + "Pawn_" + "1"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 1:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "2"
                        token.rName = "#b" + "Pawn_" + "2"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 2:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "3"
                        token.rName = "#b" + "Pawn_" + "3"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 3:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "4"
                        token.rName = "#b" + "Pawn_" + "4"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 4:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "5"
                        token.rName = "#b" + "Pawn_" + "5"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 5:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "6"
                        token.rName = "#b" + "Pawn_" + "6"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 6:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "7"
                        token.rName = "#b" + "Pawn_" + "7"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 7:
                        token.type = new BlackPawn
                        token.name = "black" + "Pawn_" + "8"
                        token.rName = "#b" + "Pawn_" + "8"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    default:
                }
                break
            case 1: //white pawn row

                switch (token.y) {
                    case 7://Pawn 1
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "1"
                        token.rName = "#w" + "Pawn_" + "1"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 6:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "2"
                        token.rName = "#w" + "Pawn_" + "2"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 5:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "3"
                        token.rName = "#w" + "Pawn_" + "3"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 4:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "4"
                        token.rName = "#w" + "Pawn_" + "4"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 3:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "5"
                        token.rName = "#w" + "Pawn_" + "5"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 2:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "6"
                        token.rName = "#w" + "Pawn_" + "6"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 1:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "7"
                        token.rName = "#w" + "Pawn_" + "7"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    case 0:
                        token.type = new WhitePawn
                        token.name = "white" + "Pawn_" + "8"
                        token.rName = "#w" + "Pawn_" + "8"
                        AddToBoard(token.type.imgW, token.name, token.docTag, token.rName)

                        break
                    default:
                }
                break
            case 7: //Black Back Row
                switch (token.y) {

                    case 0://Rook2
                        token.type = new Rook
                        token.name = "blackRook_1"
                        token.rName = "#b" + "Rook_1"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 7://Rook1
                        token.type = new Rook
                        token.name = "blackRook_2"
                        token.rName = "#b" + "Rook_2"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 1: //Knight2
                        token.type = new Knight
                        token.name = "blackKnight_1"
                        token.rName = "#b" + "Knight_1"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 6: //Knight1
                        token.type = new Knight
                        token.name = "blackKnight_2"
                        token.rName = "#b" + "Knight_2"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 2: //Bishope2
                        token.type = new bishop
                        token.name = "blackBishope_1"
                        token.rName = "#b" + "Bishop_1"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 5: //Bishope1
                        token.type = new bishop
                        token.name = "blackBishope_2"
                        token.rName = "#b" + "Bishop_2"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 3: //Queen
                        token.type = new Queen
                        token.name = "blackQueen"
                        token.rName = "#b" + "Queen"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    case 4: //King
                        token.type = new King
                        token.name = "blackKing"
                        token.rName = "#b" + "King"
                        AddToBoard(token.type.imgB, token.name, token.docTag, token.rName)

                        break
                    default:
                        break
                }
                break
            default:
                break
        }

    })


};

//Compare new scna to old Scan
const NewVsOld = function (tokens)
{
    console.log("Old VS New")
    tokens.forEach((token) => {

        //Find Token in History
        for (var i = 0; i < tokenHistory.length; i++) {

            
            if (token.ID == tokenHistory[i].tag) {

                //Was the token Removed
                if (token.x == 'N') {
                    RemoveFromBoard(tokenHistory[i].name, tokenHistory[i].rName)
                    tokenHistory.splice(i,1)
                }
                //Update position
                else {
                    //Futer Cheek for Valid Move Befor Updating
                    //Update the history
                    tokenHistory[i].update(token.x, token.y)
                    //Update GUI
                    UpdateBoard(tokenHistory[i].name, tokenHistory[i].docTag)
                }

                break
            }
        }
        console.log('End of History Loop')
        
    })



};


