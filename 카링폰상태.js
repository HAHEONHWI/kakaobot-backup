var key, pw, mail;
key = "자스키";
mail = "메일";
pw = "쉿";
    const { KakaoLinkClient } = require('kakaolink');
const Kakao = new KakaoLinkClient(key,"http://bot-tp.kro.kr");

Kakao.login(mail,pw);
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(packageName == "com.kakao.talk"){
var a = msg.split("/");
var b = msg.split(" ");
var c = msg.split("&");
if (msg == "명령어"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 45238, 
"template_args":{}
}, "custom" ) ;
}
if(msg == "/테스트"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 62591, 
"template_args":{}
}, "custom" ) ;
}
if (msg == "방장납치"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 45242, 
"template_args":{}
}, "custom" ) ;
}
if (msg == "왜이리조용해"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 45434, 
"template_args":{}
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
if (b[0] == "/따라하11기"){
if (msg == "/따라하11기"){
}else{
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 47203, 
"template_args":{"1":"따라하기봇","2":msg.split("/따라하기 ")[1],"3":sender+" 님 이 사용"}
}, "custom" ) ;
}
}
if (c[0] == "카링"){
if (c[1] == "List"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_idㆍ": 47203, 
"template_args":{"1":c[2],"2":c[3],"3":c[4],"4":c[5],"5":c[6],"6":c[7],"7":c[8],"8":c[9],"9":c[10],"10":c[11],"11":c[12],"12":c[13],"13":c[14],"THU1":c[15],"THU2":c[16],"THU3":c[17],"THU4":c[18],"THU5":c[19]}
}, "custom" ) ;
}
if (c[1] == "feed"){
Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id": 47934, 
"template_args":{"1":c[2],"2":c[3],"3":c[4],"4":c[5],"5":c[6],"6":c[7],"7":c[8],"8":c[9],"9":c[10]}
}, "custom" ) ;
}}}}