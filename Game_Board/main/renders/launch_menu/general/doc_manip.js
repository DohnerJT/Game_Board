
//Make Home Menu
const HomeMenu = function ()
{
    let items
    let board = $("#board_selected").val();
    let game = $("#game_selected").val();

    console.log(board)
    if (board == "None") {
        items = `<button class="item_m" value = "ports">Select Board</button>`
    }
    else {
        items = `<button class="item_m" value = "ports">Change Board</button>`

    }

    if (game == "None") {
        items = items + `<button class="item_m" value = "game"> Select Game</button>`
    }
    else {
        items = items + `<button class="item_m" value = "game"> Change Game</button>`

    }
    console.log(items)
    WrightToMenu("Home", items)

};


//Write to Menu
const WrightToMenu = function (tital, children)
{
    //Clear Tital Container
    $("#menu_lable").empty(); 
    //Wright Tital
    $("#menu_lable").append(`<h2>${tital}</h2>`); 

    //Cleare the Body Container
    $("#menu_items").empty(); 
    $("#menu_items").append(children); 





    

};