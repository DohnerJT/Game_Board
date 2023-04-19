
class message {
    constructor(tag, req, msg) {

        this.tag = tag;
        this.req = req;
        this.msg = msg
    }
}

const Send = function (tag, req, msg) {

    let messageOut = new message(tag, req, msg);
    menu.Send('game', messageOut);


}

//Filter Data from Backend of the game set App
window.menu.toGame((e, data) => {
    UpdatTokents(data)
})