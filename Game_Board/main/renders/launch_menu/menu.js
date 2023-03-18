

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
                case "conect":
                    //Get Bored TItal, Refine Tital, Display Tital with Amber Status
                    let tital = $(event.currentTarget).text()
                    let titalPreped = tital.split('(')
                    BannerStatus(titalPreped[0], 'a', 'board')

                    //Send Selected port to back end
                    Send('menu', 'port', 'con', action[2]);
                    break
                default:
                    console.log("Port Fail")
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