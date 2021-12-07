function countDown() {
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  let countDown = new Date('Jan 01, 2022 00:00:00').getTime(), now = new Date().getTime();
  timeTo = countDown - now;
  d = Math.floor(timeTo / (day)) + '일 ' , h = Math.floor((timeTo % (day)) / (hour)) + '시간 ' , m = Math.floor((timeTo % (hour)) / (minute)) + '분 ' , s = Math.floor((timeTo % (minute)) / second) + '초 ';
  return d + h + m + s + '남음';
}
var key, pw, mail;
key = "97debdabc1dbd9282f6c9f688b38960b";
mail = "메일";
pw = "비번";
    const { KakaoLinkClient } = require('kakaolink');
const Kakao = new KakaoLinkClient(key,"사이트");

Kakao.login(mail,pw);
function response(room, msg , sender, isGroupChat, replier, imageDB, packageName) {
    const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스
  
{
var a = msg.split("/");
var b = msg.split(" ");
var c = msg.split("&");
if (msg == "/도움말"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id":  62625, 
"template_args":{}
}, "custom" );}}

if(msg == ":("){
  Api.reload();
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 62628 , 
"template_args":{}
}, "custom" ) ;
 }
  if(msg == "/2022"){
   Api.reload("노루팅입퇴장.js");
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 63787 , 
"template_args":{1:countDown()}
}, "custom" ) ;
 }}
   if(msg == "/날씨"){
   Api.reload("카링도움말.js");
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 64423 , 
"template_args":{img:"https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=Z8T&dc=Z8T&q=%EC%A0%84%EA%B5%AD%20%EC%98%A4%EB%8A%98%20%EB%82%A0%EC%94%A8"}
}, "custom" ) ;
 }}
