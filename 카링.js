var key, pw, mail;
key = "97debdabc1dbd9282f6c9f688b38960b";
mail = "heonhwi10";
pw = "honey1004";
    const { KakaoLinkClient } = require('kakaolink');
const Kakao = new KakaoLinkClient(key,"http://pf.kakao.com");
var cm = Api.getContext().getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
var net = cm.getActiveNetworkInfo();


Kakao.login(mail,pw);
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스
  
  if(packageName == "com.kakao.talk"){
var a = msg.split("/");
var b = msg.split(" ");
var c = msg.split("&");
if(msg.includes("m/oㄴㄴ/")){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 62861, 
"template_args":{"1":sender+" 님 이 홍보"}
}, "custom" ) ;
}
}
if(msg == ":)"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 63314, 
"template_args":{}
}, "custom" ) ;
}
if (msg == "/인터넷"){
  Api.reload("카링.js");
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 63056, 
"template_args":{"1":net.getTypeName()}
}, "custom" ) ;
}
     var dice = Math.floor(Math.random() * 6) + 1;
if (msg == "/주사위"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 63471, 
"template_args":{"1":dice}
}, "custom" ) ;
}
if(msg == "코로나현황"){
doc = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=코로나").get().select("p[class=info_num]").text();
var aaa = doc.split(" ").join("\n");
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 47203, 
"template_args":{"1":"코로나 19 현황",
"2":"확진자",
"3":aaa.split("\n")[0],
"4":"완치자",
"5":aaa.split("\n")[1],
"6":"사망자",
"7":aaa.split("\n")[2],
"8":"검사누적",
"9":aaa.split("\n")[3]}
}, "custom" ) ;
}
if (b[0] == "/따라하기"){
if (msg == "/따라하기"){
}else{
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 62730, 
"template_args":{"1":"따라하기봇","2":msg.split("/따라하기 ")[1],"3":sender}
}, "custom" ) ;
}
}
if (msg.startsWith("/송금 ")){
if(!isNaN(msg.replace("/송금 ","").replace(/,/g,""))){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 62895, 
"template_args":{"1":"송금낚시봇","2":msg.replace("/송금 ",""),"3":sender}
}, "custom" ) ;
}else{
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 62949, 
"template_args":{"1":"송금낚시봇","2":msg.split("/송금")[1],"3":sender}
}, "custom" ) ;
}
}
}
}