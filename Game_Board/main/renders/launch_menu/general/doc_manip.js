


//Make Home Menu
const HomeMenu = function () {
    let items
    let board = $("#board_selected").val();
    let game = $("#game_selected").val();

    console.log(board)
    if (board == "None") {
        items = `<button class="item_m" value = "ports/home">Select Board</button>`
    }
    else {
        items = `<button class="item_m" value = "ports/home">Change Board</button>`

    }

    if (game == "None") {
        items = items + `<button class="item_m" value = "game/home"> Select Game</button>`
    }
    else {
        items = items + `<button class="item_m" value = "game/home"> Change Game</button>`

    }
    console.log(items)
    WrightToMenu("Home", items)

};

//Get a list of found portes and populate the menu with them.
const PortMenu = async function () {
    let ports = await com.Send_Wait('port/all')
    let items

    for (var i = 0; i < ports.length; i++) {

        let make = `<button class="item_m" value = "ports/${ports[i].path}">${ports[i].name}</button>`

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