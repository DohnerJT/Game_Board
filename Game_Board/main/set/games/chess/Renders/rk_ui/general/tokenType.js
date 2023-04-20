
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
        
    }

    //Check For Avalable Tiles Forward
    
}

class WhitePawn {
    imgW = "lib/tokenW/pawnW.png";

    MoveCheck(a, y, self) { }

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

    MoveCheck(a, y, self) { }

}

class Knight {
    imgB = "lib/tokenB/knightB.png";
    imgW = "lib/tokenW/knightW.png";

    MoveCheck(a, y, self) { }

}

class King {
    imgB = "lib/tokenB/kingB.png";
    imgW = "lib/tokenW/kingW.png";

    MoveCheck(a, y, self) { }

}

class Queen {
    imgB = "lib/tokenB/queenB.png";
    imgW = "lib/tokenW/queenW.png";

    MoveCheck(a, y, self) { }

}



