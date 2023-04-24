
class TokenObj {
    type;
    name;
    rName;

    constructor(x, y, tag) {
        //Token ID
        this.tag = tag;
        this.x = x;
        this.y = y;
        //Token GUI Object ID
        this.docTag = `#x-${x}_y-${y}`
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        this.docTag = `#x-${x}_y-${y}`

    }

    Move() {
        console.log('move Entered')
        let self = this.name[0]
        let move = this.type.MoveCheck(this.x, this.y, self)

        if (!move) {
            return false
        }

        return move
    }

}


class BlackPawn
{

    imgB = "lib/tokenB/pawnB.png";

    //Get all moves and Atacks
    MoveCheck(x, y, self)
    {
        let moves = []

        let forward = this.CheckForword(x, y)
        let Attack = this.CheckAttack(x, y, self)

        if (forward) {
            forward.forEach((place) => {moves.unshift(place) })

        }
        if (Attack) {
            Attack.forEach((place) => { moves.unshift(place) })

        }

        if (moves.length) {
            return moves
        }
        else {
            return false

        }

    }

    //Check For Avalable Tiles Forward
    CheckForword(x, y) {

        let moves = []

        //First Move
        if (x == 6) {
            for (var i = 5; i > 3; i--) {
                let target = `#x-${i}_y-${y}`
                let targetCheck = $(target).children()
                console.log(target)
                console.log(targetCheck)

                if (targetCheck.length) {
                    break 
                }
                else {
                    moves.unshift({ a: "O", tial: target })
                }
            }

        }

        //Subsequent Move
        else {
            let landing = `#x-${x - 1}_y-${y}`
            let tileCheck = $(landing).children()

            if (tileCheck.length) {
                
            }
            else {
                moves.unshift({ a: "O", tial: landing })
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }
    }

    CheckAttack(x, y, self) {
        let moves = []
        let target
        let targetCheck
        let targetName 
        let targetOwn

        let newY = y + 1
        if (newY < 8) {
            target = `#x-${x-1}_y-${newY}`
            targetCheck = $(target).children()

            if (targetCheck.length) {
                targetName = targetCheck[0].id
                targetOwn = targetName[0]

                if (targetOwn != self) {
                    moves.unshift({ a: "A", tial: target })
                }
            }
            
        }

        newY = y - 1
        if (newY > -1) {
            target = `#x-${x - 1}_y-${newY}`
            targetCheck = $(target).children()

            if (targetCheck.length) {
                targetName = targetCheck[0].id
                targetOwn = targetName[0]

                if (targetOwn != self) {
                    moves.unshift({ a: "A", tial: target })
                }
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }
}

class WhitePawn {
    imgW = "lib/tokenW/pawnW.png";

    MoveCheck(x, y, self) {
        let moves = []

        let forward = this.CheckForword(x, y)
        let Attack = this.CheckAttack(x, y, self)

        if (forward) {
            forward.forEach((place) => { moves.unshift(place) })

        }
        if (Attack) {
            Attack.forEach((place) => { moves.unshift(place) })

        }

        if (moves.length) {
            return moves
        }
        else {
            return false

        }

    }

    //Check For Avalable Tiles Forward
    CheckForword(x, y) {

        let moves = []

        //First Move
        if (x == 1) {
            for (var i = 2; i < 4; i++) {
                let target = `#x-${i}_y-${y}`
                let targetCheck = $(target).children()
                console.log(target)
                console.log(targetCheck)

                if (targetCheck.length) {
                    break
                }
                else {
                    moves.unshift({ a: "O", tial: target })
                }
            }

        }

        //Subsequent Move
        else {
            let landing = `#x-${x + 1}_y-${y}`
            let tileCheck = $(landing).children()

            if (tileCheck.length) {

            }
            else {
                moves.unshift({ a: "O", tial: landing })
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }
    }

    CheckAttack(x, y, self) {
        let moves = []
        let target
        let targetCheck
        let targetName
        let targetOwn

        let newY = y + 1
        if (newY < 8) {
            target = `#x-${x + 1}_y-${newY}`
            targetCheck = $(target).children()

            if (targetCheck.length) {
                targetName = targetCheck[0].id
                targetOwn = targetName[0]

                if (targetOwn != self) {
                    moves.unshift({ a: "A", tial: target })
                }
            }

        }

        newY = y - 1
        if (newY > -1) {
            target = `#x-${x + 1}_y-${newY}`
            targetCheck = $(target).children()

            if (targetCheck.length) {
                targetName = targetCheck[0].id
                targetOwn = targetName[0]

                if (targetOwn != self) {
                    moves.unshift({ a: "A", tial: target })
                }
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }
}

class Rook
{
    imgB = "lib/tokenB/rookB.png";
    imgW = "lib/tokenW/rookW.png";

    MoveCheck(x, y, self)
    {
        let moves = []
        let East = this.MoveEast(x, y, self)
        let West = this.MoveWest(x,y, self)
        let North = this.MoveNorth(x,y, self)
        let South = this.MoveSouth(x, y, self)

        //Check if moves are avalable for each direction
        if (East)
        {
            East.forEach((tile) => { moves.unshift(tile)})
        }
        if (West)
        {
            console.log("West")
            console.log(West)
            West.forEach((tile) => { moves.unshift(tile) })
        }
        if (North)
        {
            console.log(North)
            North.forEach((tile) => { moves.unshift(tile) })
        }
        if (South)
        {
            console.log(South)
            South.forEach((tile) => { moves.unshift(tile) })
        }

        //Check that moves are avalable
        if (moves.length)
        {
            return moves
        }
        else {
            return false

        }
    }

    MoveEast(x, y, self) {

        let moves = []

        for (var newX = x+1; newX < 8; newX++) {
            let target = `#x-${newX}_y-${y}`
            let targetCheck = $(target).children()

            //Tile is Blocked
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })

                }
                else {
                    break
                }                
                
            }

            //Tile is open
            else {
                
                moves.unshift({a:"O", tial:target })
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }

    MoveWest(x, y, self) {

        let moves = []

        for (var newX = x - 1; newX > -1; newX--) {
            let target = `#x-${newX}_y-${y}`
            let targetCheck = $(target).children()

            //Tile is Blocked
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })

                }
                else {
                    break
                }



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }

    MoveNorth(x, y, self) {

        let moves = []

        for (var newY = y + 1; newY < 8; newY++) {
            let target = `#x-${x}_y-${newY}`
            let targetCheck = $(target).children()

            //Tile is Blocked
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })

                }
                else {
                    break
                }



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }

    MoveSouth(x, y, self) {

        let moves = []

        for (var newY = y - 1; newY > -1; newY--) {
            let target = `#x-${x}_y-${newY}`
            let targetCheck = $(target).children()

            //Tile is Blocked
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })

                }
                else {
                    break
                }



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }

        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }
}

class bishop {
    imgB = "lib/tokenB/bishopB.png";
    imgW = "lib/tokenW/bishopW.png";

    MoveCheck(x, y, self) {
        let moves = []

        let NorthEast = this.CheckNorthEast(x, y, self)
        let NorthWest = this.CheckNorthWest(x, y, self)
        let SouthEast = this.CheckSouthEast(x, y, self)
        let SouthWest = this.CheckSouthWest(x, y, self)

        if (NorthEast) {
            NorthEast.forEach((tile) => { moves.unshift(tile) })

        }
        if (NorthWest) {
            NorthWest.forEach((tile) => { moves.unshift(tile) })

        }
        if (SouthEast) {
            SouthEast.forEach((tile) => { moves.unshift(tile) })

        }
        if (SouthWest) {
            SouthWest.forEach((tile) => { moves.unshift(tile) })

        }

        if (moves.length) {
            return moves
        }
        else {
            return false

        }

    }

    CheckNorthEast(x, y, self) {
        let moves = []
        let newX = x+1
        let target
        let targetCheck

        for (var newY = y+1; newY < 8; newY++) {
            //Set Target Tile
            target = `#x-${newX}_y-${newY}`
            targetCheck = $(target).children()

            ////Check for Token on target tile
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })
                    break
                }
                else {
                    break
                }



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }
            newX++
        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }
    }

    CheckNorthWest(x, y, self) {
        let moves = []
        let newX = x - 1
        let target
        let targetCheck

        for (var newY = y + 1; newY < 8; newY++) {
            //Set Target Tile
            if (newX > 8 || newX < 0) {
                break
            }
            target = `#x-${newX}_y-${newY}`
            targetCheck = $(target).children()

            ////Check for Token on target tile
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })
                    break
                }
                else {
                    break
                }



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }
            newX--
        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }
    }

    CheckSouthEast(x, y, self) {
        let moves = []
        let newX = x + 1
        let target
        let targetCheck

        for (var newY = y - 1; newY > -1; newY--) {
            //Set Target Tile
            if (newX != -1 || newX !=8) {
                target = `#x-${newX}_y-${newY}`
                targetCheck = $(target).children()
            }
            else {
                break
            }
           

            ////Check for Token on target tile
            if (targetCheck.length) {
                let targetName = targetCheck[0].id
                let targetOwn = targetName[0]

                if (targetOwn != self) {
                    console.log("Atack")
                    moves.unshift({ a: "A", tial: target })
                    break
                }
                else {
                    break
                }



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }
            newX++
        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }
    }

    CheckSouthWest(x, y, self) {
        let moves = []
        let newX = x - 1
        let target
        let targetCheck

        for (var newY = y - 1; newY > -1; newY--) {
            //Set Target Tile
            if (newX > 8 || newX < 0) {
                break
            }
            target = `#x-${newX}_y-${newY}`
            targetCheck = $(target).children()

            ////Check for Token on target tile
            if (targetCheck.length) {
                if (newX != -1 || newX != 8) {
                    let targetName = targetCheck[0].id
                    let targetOwn = targetName[0]

                    if (targetOwn != self) {
                        console.log("Atack")
                        moves.unshift({ a: "A", tial: target })
                        break
                    }
                    else {
                        break
                    }
                }
                else {
                    break
                }
                

               



            }
            //Tile is open
            else {

                moves.unshift({ a: "O", tial: target })
            }
            newX--
        }

        if (moves.length) {
            return moves
        }
        else {
            return false
        }

    }

}

class Knight {
    imgB = "lib/tokenB/knightB.png";
    imgW = "lib/tokenW/knightW.png";

    MoveCheck(a, y, self) { }

}

class King {
    imgB = "lib/tokenB/kingB.png";
    imgW = "lib/tokenW/kingW.png";

    MoveCheck(x, y, self) { }

}

class Queen {
    imgB = "lib/tokenB/queenB.png";
    imgW = "lib/tokenW/queenW.png";

    MoveCheck(x, y, self) { }

}



