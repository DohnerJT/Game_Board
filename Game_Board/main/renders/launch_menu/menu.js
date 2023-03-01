

const SetUp = function ()
{

    HomeMenu();

    //Creat link with the back end for Menu
    com.Link("menu")
    com.Send("menu", "Front to Back")
    //menu events
    $(document).delegate(".item_m", "click", FilterMenu)

}

//Filter Events from the item Menu
const FilterMenu = function (event)
{

    let item = $(event.currentTarget).attr("value")
    let action = item.split('/')

    switch (action[0]) {
        //Build and populate the ports menu for linking
        case "ports":
            switch (action[1]) {
                case "home":
                    PortMenu()  
                    break

                default:
                    Send('menu', 'port', 'con', action[1]);
                    break
            }         
            break

        case "game":

            break 

        default:
            break

    }

};

$(document).ready(SetUp);