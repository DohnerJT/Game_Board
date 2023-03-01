
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
    com.Send(channal, make);
};
