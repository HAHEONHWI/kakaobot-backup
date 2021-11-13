const scriptName = "tts";

​

​

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스

{

  if(msg.indexOf("/tts ")==0) {

    var m=msg.replace("/tts ","");

    replier.reply("https://tts-translate.kakao.com/newtone?message="+m);

  }

}

}}