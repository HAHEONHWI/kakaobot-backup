
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
const botest = [FileStream,"/sdcard/botest"]
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스

FileStream.append("/sdcard/채팅기록/"+room, new Date().getHours() + " : " + new Date().getMinutes() + " | " + sender + " : " + msg + "\n⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼\n");

 

if (FileStream.read("/sdcard/채팅기록/"+room).length >= 6000) {

 

FileStream.remove("/sdcard/채팅기록/"+room);

 

}

 

if (msg == "/로그") {

 

replier.reply("'"+room+"' 방의 채팅기록 입니다." + new Array(500).join("\u200b") + "\n\n" + FileStream.read("/sdcard/채팅기록/"+room));

 

}

 

}}