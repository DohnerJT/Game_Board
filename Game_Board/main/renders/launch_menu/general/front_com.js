
/**
 * Programed By:    James T. Dohner
 * Started:         01/10/2023
 * Purpose:         Sinyour project 2022 - 2023 IUPUI
 * 
 * front_com:
 *  
 * handales preparing and sending communication to the back end
 * */



class message {
    constructor(tag, req, msg) {

        this.tag = tag;
        this.req = req;
        this.msg = msg
    }
}
//Code Body ***********************************************************************************************

const Send = function (channal, tag, req, msg)
{

    let make = new message(tag, req, msg);

    //alert(`Channal: ${channal} \nMessage: ${make}`);
    menu.Send(channal, make);
};

//Sort Messages from the backend intended for menu manipulation
window.menu.toMenu((event, data) => {
    console.log('tag: ' + data.tag);


    switch (data.tag) {

        case "port":
            console.log('req: ' + data.req);

            switch (data.req) {
                case 'confir':
                    console.log(data.msg)
                    BannerStatus("na", 'g', 'board')
                    SetPortConnected()
                    break
                case "confirC":
                    BannerStatus("na", 'n', 'board')
                    PortMenu()
                case 'all':
                    break
                default:
                    break;
            }
            break

        case 'game':

            switch (data.req) {
                case 'confir':
                    console.log(data.msg)
                    BannerStatus("na", 'g', 'game')
                    SetGameSelected()
                    break

                default:
            }
                    break
        default:
    }
    console.log("Message Data Front" + data)

})