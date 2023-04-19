
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
}

class BlackPawn {
    imgB = "lib/tokenB/pawnB.png";
}

class WhitePawn {
    imgW = "lib/tokenW/pawnW.png";

}

class Rook {
    imgB = "lib/tokenB/rookB.png";
    imgW = "lib/tokenW/rookW.png";


}

class bishop {
    imgB = "lib/tokenB/bishopB.png";
    imgW = "lib/tokenW/bishopW.png";

}

class Knight {
    imgB = "lib/tokenB/knightB.png";
    imgW = "lib/tokenW/knightW.png";

}

class King {
    imgB = "lib/tokenB/kingB.png";
    imgW = "lib/tokenW/kingW.png";

}

class Queen {
    imgB = "lib/tokenB/queenB.png";
    imgW = "lib/tokenW/queenW.png";

}



