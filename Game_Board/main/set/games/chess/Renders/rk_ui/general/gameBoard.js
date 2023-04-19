

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