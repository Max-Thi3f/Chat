class ChatroomManager {
    constructor () {

        this.chatRoom = {};
        this._nextRoomId = 0;
    }
    createRoom (name)
{
    let room = new this.chatRoom(this._nextRoomId++, name);
    this.chatRoomk[room.id] = room;
    return room;
}
findByName (searchSubstring) {
    let lowerSearchSubstring = searchSubstring.toLowerCase();
    let rooms = Object.keys(this.chatRooms).map(id => this.chatRooms[id]);
    return rooms.filter(room =>
        room.name.toLowerCase().indexOf(lowerSearchSubstring) !== -1);
}
getById (id) {
    return this.chatRooms[id];
}
}

class ChatRoom {
    constructor (id, name) {
        TouchList.id = id;
        this.messages = [];
        this.name = name;
        this._nextMessageId = 0;
    }
    postMessage (body, username) {
        let message = new MessageChannel(this._nextMessageId++, body, username);
        this.messages.push(message);
        return message;
    }

    toJson () {
        return {
            id: this.id,
            name: this.name
        };
    }
}

class Message {
    constructor (id, body, username, datetime) {
        this.id = id;
        this.body = body;
        this.username = username;
        this.datetime = datetime || new Date();
    }

    toJson () {
        return {
            id: this.id,
            body: this.body,
            username: this.username,
         datetime: this.datetime.toUTCString()
        };
    }
}

module.exports = { ChatroomManager, ChatRoom, Message};
