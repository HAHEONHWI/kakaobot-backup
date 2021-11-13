function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {

   const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스
 

var cmd = msg.split(" ")[0];

 

if(cmd=="/먼지"){

 

try{

 

var a2 = msg.replace(cmd+" ","");

 

var t = 0;

 

a2 = String(a2);

 

var url = org.jsoup.Jsoup.connect("http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=1WcSxJ7AnqmxFb3N33ynHxNofXXv2diNSNPF1Ax7LSWica2yL59NGu5OWBFfOmJOnQTm4xy5lQWWdjkW6sBaYA%3D%3D&returnType=xml&numOfRows=593&pageNo=1&sidoName=%EC%A0%84%EA%B5%AD&ver=1.0").get()

 

url = String(url);

 

var temp = url.split("<item>");

 

var target;

 

var target_num = 0;

 

var result=["※서울특별시\n","※부산광역시\n","※대구광역시\n","※인천광역시\n","※광주광역시\n","※대전광역시\n","※울산광역시\n","※세종특별자치시\n","※경기도\n","※강원도\n","※충청북도\n","※충청남도\n","※전라북도\n","※전라남도\n","※경상북도\n","※경상남도\n","※제주특별자치도\n",];

 

var tim=[];

 

var city=[];

 

var loc=[];

 

var pm25val=[];

 

var pm25grade=[];

 

var pm10val=[];

 

var pm10grade=[];

 

var no2val=[];

 

var no2grade=[];

 

var coval=[];

 

var cograde=[];

 

var o3val=[];

 

var o3grade=[];

 

var so2val=[];

 

var so2grade=[];

 

var final;

 

var finalresult="";

 

for(var n = 1; n<594; n++)

 

{

 

target = "<sidoName>";

 

target_num = temp[n].indexOf(target);

 

city[n]=temp[n].substring(target_num+10,(temp[n].substring(target_num).indexOf("</sidoName>")+target_num)); //도시이름 빼오기

 

target = "<dataTime>";

 

target_num = temp[n].indexOf(target);

 

tim[n]=temp[n].substring(target_num+10,(temp[n].substring(target_num).indexOf("</dataTime>")+target_num)); //시간 빼오기

 

target = "<stationName>";

 

target_num = temp[n].indexOf(target);

 

loc[n]=temp[n].substring(target_num+13,(temp[n].substring(target_num).indexOf("</stationName>")+target_num)); //지역이름 빼오기

 

target= "<pm25Value>";

 

target_num = temp[n].indexOf(target);

 

pm25val[n]=temp[n].substring(target_num+11,(temp[n].substring(target_num).indexOf("</pm25Value>")+target_num)); //초미세먼지 값 빼오기

 

target="<pm25Grade>";

 

target_num = temp[n].indexOf(target);

 

pm25grade[n]=temp[n].substring(target_num+11,(temp[n].substring(target_num).indexOf("</pm25Grade>")+target_num)); //초미세먼지 등급값 빼오기

 

target= "<pm10Value>";

 

target_num = temp[n].indexOf(target);

 

pm10val[n]=temp[n].substring(target_num+11,(temp[n].substring(target_num).indexOf("</pm10Value>")+target_num)); //미세먼지 값 빼오기

 

target="<pm10Grade>";

 

target_num = temp[n].indexOf(target);

 

pm10grade[n]=temp[n].substring(target_num+11,(temp[n].substring(target_num).indexOf("</pm10Grade>")+target_num)); //미세먼지 등급값 빼오기

 

target= "<no2Value>";

 

target_num = temp[n].indexOf(target);

 

no2val[n]=temp[n].substring(target_num+10,(temp[n].substring(target_num).indexOf("</no2Value>")+target_num)); //이산화질소 값 빼오기

 

target="<no2Grade>";

 

target_num = temp[n].indexOf(target);

 

no2grade[n]=temp[n].substring(target_num+10,(temp[n].substring(target_num).indexOf("</no2Grade>")+target_num)); //이산화질소 등급값 빼오기

 

target= "<coValue>";

 

target_num = temp[n].indexOf(target);

 

coval[n]=temp[n].substring(target_num+9,(temp[n].substring(target_num).indexOf("</coValue>")+target_num)); //일산화탄소 값 빼오기

 

target="<coGrade>";

 

target_num = temp[n].indexOf(target);

 

cograde[n]=temp[n].substring(target_num+9,(temp[n].substring(target_num).indexOf("</coGrade>")+target_num)); //일산화탄소 등급값 빼오기

 

target= "<o3Value>";

 

target_num = temp[n].indexOf(target);

 

o3val[n]=temp[n].substring(target_num+9,(temp[n].substring(target_num).indexOf("</o3Value>")+target_num)); //오존 값 빼오기

 

target="<o3Grade>";

 

target_num = temp[n].indexOf(target);

 

o3grade[n]=temp[n].substring(target_num+9,(temp[n].substring(target_num).indexOf("</o3Grade>")+target_num)); //오존 등급값 빼오기

 

target= "<so2Value>";

 

target_num = temp[n].indexOf(target);

 

so2val[n]=temp[n].substring(target_num+10,(temp[n].substring(target_num).indexOf("</so2Value>")+target_num)); //아황산가스 값 빼오기

 

target="<so2Grade>";

 

target_num = temp[n].indexOf(target);

 

so2grade[n]=temp[n].substring(target_num+10,(temp[n].substring(target_num).indexOf("</so2Grade>")+target_num)); //아황산가스 등급값 빼오기

 

//빈칸, 공간 제거

 

tim[n]=tim[n].trim();

 

city[n]=city[n].trim();

 

loc[n]=loc[n].trim();

 

pm25val[n]=pm25val[n].trim();

 

pm25grade[n]=pm25grade[n].trim();

 

pm10val[n]=pm10val[n].trim();

 

pm10grade[n]=pm10grade[n].trim();

 

no2val[n]=no2val[n].trim();

 

no2grade[n]=no2grade[n].trim();

 

coval[n]=coval[n].trim();

 

cograde[n]=cograde[n].trim();

 

o3val[n]=o3val[n].trim();

 

o3grade[n]=o3grade[n].trim();

 

so2val[n]=so2val[n].trim();

 

so2grade[n]=so2grade[n].trim();

 

 

//행정 구역으로 분류

 

switch(city[n]){

 

case "서울":

 

result[0]=result[0]+"\n"+loc[n];

 

break;

 

case "부산":

 

result[1]=result[1]+"\n"+loc[n];

 

break;

 

case "대구":

 

result[2]=result[2]+"\n"+loc[n];

 

break;

 

case "인천":

 

result[3]=result[3]+"\n"+loc[n];

 

break;

 

case "광주":

 

result[4]=result[4]+"\n"+loc[n];

 

break;

 

case "대전":

 

result[5]=result[5]+"\n"+loc[n];

 

break;

 

case "울산":

 

result[6]=result[6]+"\n"+loc[n];

 

break;

 

case "세종":

 

result[7]=result[7]+"\n"+loc[n];

 

break;

 

case "경기":

 

result[8]=result[8]+"\n"+loc[n];

 

break;

 

case "강원":

 

result[9]=result[9]+"\n"+loc[n];

 

break;

 

case "충북":

 

result[10]=result[10]+"\n"+loc[n];

 

break;

 

case "충남":

 

result[11]=result[11]+"\n"+loc[n];

 

break;

 

case "전북":

 

result[12]=result[12]+"\n"+loc[n];

 

break;

 

case "전남":

 

result[13]=result[13]+"\n"+loc[n];

 

break;

 

case "경북":

 

result[14]=result[14]+"\n"+loc[n];

 

break;

 

case "경남":

 

result[15]=result[15]+"\n"+loc[n];

 

break;

 

case "제주":

 

result[16]=result[16]+"\n"+loc[n];

 

break;

 

default:

 

break;

 

}

 

if(loc[n]==a2)

 

{

 

t=n;

 

}

 

}

 

if(a2=="list"){

 

for(var n=0;n<17;n++)

 

{

 

finalresult=finalresult+result[n]+"\n\n";

 

}

 

replier.reply(finalresult);

 

}

 

else if(t!=0)

 

{

 

switch(pm25grade[t]) {

 

case "1":

 

pm25grade[t] = "좋음(굿)";

 

break;

 

case "2":

 

pm25grade[t] = "보통(근심)";

 

break;

 

case "3":

 

pm25grade[t] = "나쁨(훌쩍)";

 

break;

 

case "4":

 

pm25grade[t] ="매우나쁨(아픔)";

 

}

 

switch(pm10grade[t]) {

 

case "1":

 

pm10grade[t] = "좋음(굿)";

 

break;

 

case "2":

 

pm10grade[t] = "보통(근심)";

 

break;

 

case "3":

 

pm10grade[t] = "나쁨(훌쩍)";

 

break;

 

case "4":

 

pm10grade[t] ="매우나쁨(아픔)";

 

}

 

switch(no2grade[t]) {

 

case "1":

 

no2grade[t] = "좋음(굿)";

 

break;

 

case "2":

 

no2grade[t] = "보통(근심)";

 

break;

 

case "3":

 

no2grade[t] = "나쁨(훌쩍)";

 

break;

 

case "4":

 

no2grade[t] ="매우나쁨(아픔)";

 

}

 

switch(cograde[t]) {

 

case "1":

 

cograde[t] = "좋음(굿)";

 

break;

 

case "2":

 

cograde[t] = "보통(근심)";

 

break;

 

case "3":

 

cograde[t] = "나쁨(훌쩍)";

 

break;

 

case "4":

 

cograde[t] ="매우나쁨(아픔)";

 

}

 

switch(o3grade[t]) {

 

case "1":

 

o3grade[t] = "좋음(굿)";

 

break;

 

case "2":

 

o3grade[t] = "보통(근심)";

 

break;

 

case "3":

 

o3grade[t] = "나쁨(훌쩍)";

 

break;

 

case "4":

 

o3grade[t] ="매우나쁨(아픔)";

 

}

 

switch(so2grade[t]) {

 

case "1":

 

so2grade[t] = "좋음(굿)";

 

break;

 

case "2":

 

so2grade[t] = "보통(근심)";

 

break;

 

case "3":

 

so2grade[t] = "나쁨(훌쩍)";

 

break;

 

case "4":

 

so2grade[t] ="매우나쁨(아픔)";

 

}

 

tim[t] = tim[t].split("-");

 

final="※"+loc[t]+"("+city[t]+") -"+tim[t][0]+"/"+tim[t][1]+"/"+tim[t][2]+"-\n\n"+"◎초미세먼지농도 : "+pm25val[t]+"μg/m³ ("+pm25grade[t]+")\n"+"◎미세먼지농도 : "+pm10val[t]+"μg/m³ ("+pm10grade[t]+")\n"+"◎이산화질소농도 : "+no2val[t]+"ppm ("+no2grade[t]+")\n"+"◎일산화탄소 : "+coval[t]+"ppm ("+cograde[t]+")\n"+"◎오존 : "+o3val[t]+"ppm ("+o3grade[t]+")\n"+"◎아황산가스 : "+so2val[t]+"ppm ("+so2grade[t]+")";

 

replier.reply(final);

 

}

 

else

 

{

 

replier.reply("명령어 확인 '/먼지 (지역이름)' 지역이름은 '/먼지 list'로 확인하세요");

 

}

 

}

 

catch(error){

 

Log.e("오류 발생\n"+sender+"님 오류발생.\n"+error.name+"\n"+error.message);

 

replier.reply(error.name+"\n"+error.message);

 

}

}

}
}