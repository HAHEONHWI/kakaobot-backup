function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
   const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스
    if(msg.indexOf("/사전")==0){
var u = Utils.getWebText("https://opendict.korean.go.kr/search/searchResult?focus_name=query&query="+msg.substr(3));
var i = true
var po = u.replace(/<(.+?)>/g,"")
var count = 1;
var list = msg.substr(3)+"의 검색 결과\n"
while(i){
    var num = "「"+"00"+String(count)+"」"
    if(po.match("「"+"00"+String(count)+"」")!==null){
        list += num+u.split(num)[1].split("</a>")[0].replace(/<(.+?)>/g,"")+"\n"
        count++
    } else {
        break;
    }
}
replier.reply(list+"검색 결과:"+(count-1))
}

}}