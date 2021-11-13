/*
* © 2021 kaan, All rights reserved.
* 게시글에 ❤와 댓글은 큰 힘이 됩니다🔥
* https://blog.naver.com/junyoungbae02/221984035173
*/

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스
    if(msg=='/상태') {
        replier.reply('현재 상태 입니다(JS)\n'+'\u200b'.repeat(500)+Api.getScriptNames().map(e=>(Api.isOn(e))?'[🔴 사용불가] '+e:'[🔵 사용가능]'+e).join('\n'));
        return;
    }
}}