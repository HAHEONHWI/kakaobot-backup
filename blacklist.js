const botest = [FileStream,"/sdcard/botest"];
const momttom = [-1782753093, -376810925];//관리자 해시코드;
function response(room, msg, sender, sGroupChat, replier, ImageDB, packageName) {
if(momttom.indexOf(ImageDB.profileHash)!==-1){
if(msg.startsWith("/블랙추가 ")){
let abcde = msg.replace("/블랙추가 ","")
botest[0].write(botest[1]+"/"+abcde+".txt","ㄱ");
replier.reply("블랙추가 완료");
}
if(msg.startsWith("/블랙삭제 ")){
let abcde = msg.replace("/블랙삭제 ","")
botest[0].remove(botest[1]+"/"+abcde+".txt");
replier.reply("블렉삭제 완료");
}
}
}