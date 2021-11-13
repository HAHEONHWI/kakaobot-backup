const fs = FileStream; 
let jsonremotechat = {};
jsonremotechat['roomList'] = [];
com.xfl.msgbot.application.service.NotificationListener.e.entrySet().toArray().forEach(x=>jsonremotechat['roomList'].push(x.key));
jsonremotechat['isStarted'] = false;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){ 
if(msg.replace(/ /g, '') == '/원격채팅시작') {
    if(jsonremotechat['isStarted']) { 
        replier.reply('이미 원격채팅중입니다.');
        return;
    }
    jsonremotechat['roomList'] = [];
    com.xfl.msgbot.application.service.NotificationListener.e.entrySet().toArray().forEach(x=>jsonremotechat['roomList'].push(x.key));
    Api.replyRoom(room, '원격채팅을 시작합니다. \n번호를 입력해 연결하고 싶은 채팅방을 선택하세요.(예: 1)\n\n'+jsonremotechat['roomList'].map(e=>'['+(jsonremotechat['roomList'].indexOf(e)+1)+'] '+e).join('\n'));
    jsonremotechat['roomData'] = {};
    jsonremotechat['roomData']['step'] = 'first';
    jsonremotechat['roomData']['myName'] = sender;
    jsonremotechat['roomData']['hash'] = imageDB.getProfileHash();
    jsonremotechat['roomData']['sendAt'] = '';
    jsonremotechat['roomData']['myRoomName'] = room;
    jsonremotechat['isStarted'] = true;
    return;
}

if(msg.replace(/ /g, '') == '/채팅종료') {
    if(!jsonremotechat['isStarted']) {
        Api.replyRoom(room, '연결된 방이 없습니다. \n"/원격채팅 시작" 을 입력해 원격채팅을 시작해 보세요.');
        return;
    } else {
        jsonremotechat['isStarted'] = false;
        delete jsonremotechat['roomData'];
        Api.replyRoom(room, '원격채팅을 종료하였습니다.');
    }
}
if(jsonremotechat['isStarted']) {
    switch(jsonremotechat['roomData']['step']) {
        case 'first':
            if(room == jsonremotechat['roomData']['myRoomName'] && sender == jsonremotechat['roomData']['myName'] && imageDB.getProfileHash()==jsonremotechat['roomData']['hash']) {

                if(!Number.isInteger(Number(msg))) {
                    Api.replyRoom(room, '자연수로만 입력해 주세요.');
                    break;
                } else if(Number(msg) > jsonremotechat['roomList'].length) {
                    Api.replyRoom(room, '위에 제시된 숫자 내에서만 입력해 주세요.');
                    break;
                } else if(Number(msg) < 1) {
                    Api.replyRoom(room, '자연수로만 입력해 주세요.');
                    break;
                } 
                if(jsonremotechat['roomList'][(Number(msg)-1)] == room) {
                    Api.replyRoom(room, '현재 있는 방입니다. 다른 방을 선택해 주세요.');
                    break;
                } else {
                    jsonremotechat['roomData']['sendAt'] = jsonremotechat['roomList'][(Number(msg)-1)];
                    Api.replyRoom(room, '상대방에게 표시될 닉네임을 입력해 주세요.');
                    jsonremotechat['roomData']['step'] = 'second';
                    break;
                }
            }

        case 'second':
            if(room == jsonremotechat['roomData']['myRoomName'] && sender == jsonremotechat['roomData']['myName'] && imageDB.getProfileHash()==jsonremotechat['roomData']['hash']) {
                jsonremotechat['roomData']['nickName'] = msg;
                Api.replyRoom(room, '방 ['+jsonremotechat['roomData']['sendAt']+'] 과 연결되었습니다. \n현재 계신 방에서 메시지를 보내면 해당 방으로 메시지가 전송됩니다\n\n채팅을 종료하고 싶으시다면\n"/채팅종료" 라고 입력해 주세요.');
                jsonremotechat['roomData']['step'] = 'third';
                break;
            }        

        case 'third':
            if(room == jsonremotechat['roomData']['myRoomName'] && sender == jsonremotechat['roomData']['myName'] && imageDB.getProfileHash()==jsonremotechat['roomData']['hash']) Api.replyRoom(jsonremotechat['roomData']['sendAt'], '[원격채팅] ['+jsonremotechat['roomData']['nickName']+'] '+msg);
            
            if(room == jsonremotechat['roomData']['sendAt']) Api.replyRoom(jsonremotechat['roomData']['myRoomName'], '['+room+'] ['+sender+'] '+msg);
            break;

        default:
            break;
    }
}
}