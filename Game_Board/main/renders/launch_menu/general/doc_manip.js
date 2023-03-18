

//******************Make Home Menu****************************************************************************
const HomeMenu = function () {
    let items
    let board = $("#board_selected").val();
    let game = $("#game_selected").val();

    //Port Option
    if (board == "None") {
        items = `<button class="item_m" value = "ports/home">Select Board</button>`
    }
    else {
        items = `<button class="item_m" value = "ports/conHome">Board Menu</button>`

    }

    //Game Option
    if (game == "None") {
        items = items + `<button class="item_m" value = "game/home"> Select Game</button>`
    }
    else {
        items = items + `<button class="item_m" value = "game/selHome"> Change Game</button>`

    }
    console.log(items)
    WrightToMenu("Home", items)

};

/******************* Ports ********************************************************************************/

//Get a list of found portes and populate the menu with them.
const PortMenu = async function () {
    let ports = await menu.Send_Wait('port/all')
    let items

    for (var i = 0; i < ports.length; i++) {

        let make = `<button class="item_m" value = "ports/conect/${ports[i].path}">${ports[i].name}</button>`

        if (i == 0) {
            items = make
        }
        else {
            items += make
        }
    }

    //console.log(`Passed Port List: \n` + portList)
    WrightToMenu("Select Board", items)

};

//Show Set port menu
const SetPortConnected = function ()
{
    let item = `<button class = 'item_m' value="ports/close"> Disconect</button>`
    WrightToMenu(connectedBoard.name, item)
};

/******************* Games ********************************************************************************/

// Get a list of all Games
const GameMenu = async function ()
{
    let games = await menu.Send_Wait('game/all')
    let items = ""

    games.forEach(set => {
        items += `<button class="item_m" value = "game/select/${set.shortName}">${set.name}</button>`
    })

    console.log(items)

    WrightToMenu('Games', items)

};

const SetGameSelected = function ()
{

    

};
/******************* Menu and Banner Wright ********************************************************************************/

//Write to Menu
const WrightToMenu = function (tital, children) {
    //Clear Tital Container
    $("#menu_text").empty();
    //Wright Tital
    $("#menu_text").append(`${tital}`);

    //Cleare the Body Container
    $("#menu_items").empty();
    $("#menu_items").append(children);

};

//Modifey Banners.
const BannerStatus = function (tital, state, target)
{
    let setTarget ="#" + target + "_label"
    let setTital = "#" + target + "_selected"

    switch (state) {
        case 'r':
            $(setTarget).removeClass();
            $(setTarget).addClass('red');
            break
        case 'a':
            $(setTital).val(tital);
            $(setTarget).removeClass();
            $(setTarget).addClass('amber');
            break
        case 'g':
            $(setTarget).removeClass();
            $(setTarget).addClass('green');
            break
        default:
            connectedBoard = NaN
            $(setTital).val("None");
            $(setTarget).removeClass();
            break
    }

    

};