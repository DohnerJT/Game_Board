
class board {
    constructor(path, name) {
        this.path = path;
        this.name = name
    }
}

let connectedBoard = []
let selectedGame = []


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
        //Build and populate the ports menu, Connect and disconect from ports
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
                case "test":                 
                    Send('menu', 'port', 'test', '');
                    break
                case "testMsg":
                    Send('menu', 'port', 'start', '');
                    break
                default:
                    console.log("Menu Port Fail")
                    break
            }         
            break

        //Build and populate game menues, set and change game rule sets
        case "game":

            switch (action[1]) {
                //List all avalable games
                case 'home':
                    GameMenu()
                    break
                case 'selHome':
                    SetGameSelected()
                    break
                case 'select':
                    //Create Game object
                    let tital = $(event.currentTarget).text()
                    let shortTital = action[2]
                    selectedGame = {
                        name: tital,
                        shortName: shortTital
                    }

                    //Update Banner
                    BannerStatus(selectedGame.name, 'a', 'game')

                    //Send to backend
                    Send('menu', 'game', 'set', selectedGame.shortName);

                    console.log(selectedGame)
                    break
                case "close":
                    BannerStatus(selectedGame.name, 'a', 'game')
                    Send('menu', 'game', 'close', selectedGame.path);
                    break
                default:
                    break
            }
            break 

        default:
            break

    }

};




$(document).ready(SetUp);