
class TokenObj {
    type;
    name;
    rName;

    constructor(x, y, tag) {
        this.tag = tag;
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

const AddToBoard = function (img, name, target, roster)
{
    console.log(img)
    console.log(name)
    console.log(target)

    let boardToken = `<img src="${img}" id = "${name}" height="80px" >`
    $(target).append(boardToken)
    $(roster).removeClass("tokenUnasigned")

};

