
class board {
    constructor(path, name) {
        this.path = path;
        this.name = name
    }
}

let connectedBoard = []


const SetUp = function ()
{

    HomeMenu();

    //Creat link with the back end for Menu
    menu.Send("menu", "Front to Back")
    //menu events
    $(document).delegate(".item_m", "click", FilterMenu)
    $(document).delegate(".menu_nav_bt", "click", HomeMenu)


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
                //List all avalable ports
                case "home":
                    PortMenu()  
                    break
                //Show conected port menu
                case "conHome":
                    SetPortConnected()
                    break
                    //Conect to Selected port
                case "conect":
                    //Get Bored TItal, Refine Tital, Display Tital with Amber Status
                    let tital = $(event.currentTarget).text()
                    let titalPreped = tital.split('(')
                    connectedBoard = new board(action[2], titalPreped[0])
                    BannerStatus(connectedBoard.name, 'a', 'board')

                    //Send Selected port to back end
                    Send('menu', 'port', 'con', connectedBoard.path);
                    break
                //Close Port Conection
                case "close":
                    BannerStatus(connectedBoard.name, 'a', 'board')
                    Send('menu', 'port', 'close', connectedBoard.path);
                    break
                default:
                    console.log("Menu Port Fail")
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