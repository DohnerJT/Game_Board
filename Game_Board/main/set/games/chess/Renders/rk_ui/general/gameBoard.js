

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

    //Serch for token object in History Array
    for (var i = 0; i < tokenHistory.length; i++) {

        if (target == tokenHistory[i].rName) {
            let sentMove = tokenHistory[i].Move()
            console.log("Returned Moves: ")
            console.log(sentMove)

            if (sentMove.length) {
                console.log("Adding To Moves")

                sentMove.forEach((move) => {
                    moves.unshift(move)
                })                
            }
            else {
                moves = false

            }
            console.log(moves)
            break

        }

    }

}