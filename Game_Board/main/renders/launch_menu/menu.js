
const SetUp = function()
{

    HomeMenu();

    //Creat link with the back end for Menu
    com.Link("menu")
    //menu events
    $(document).delegate(".item_m", "click", FilterMenu)

}

const FilterMenu = function (event)
{

    let item = $(event.currentTarget).attr("value")

    switch (item) {
        case "ports":
            //Build the port window
            //let avalablePorts =
            //BuildPortMenu();
            break
        case "game":

            break 

        default:
            break

    }

};

$(document).ready(SetUp);