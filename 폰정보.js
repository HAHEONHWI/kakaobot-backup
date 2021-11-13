
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg == "/폰정보") {

   const botest = [FileStream,"/sdcard/botest"];
if(botest[0].read(botest[1]+"/"+sender+".txt")!=="ㄱ"){
//실행할소스
 



 

var device_profile_name = android.provider.Settings.Global.getString(Api.getContext().getContentResolver(), "device_name");

 

replier.reply("Bot상태\n\n『📱』: "+device_profile_name+"\n『📱』안드로이드버전 : "+Device.getAndroidVersionName()+"\n\n『🔋』배터리 : "+Device.getBatteryLevel()+"%\n『🌡』온도 : "+Device.getBatteryTemperature()/10+"°c\n『🔌』충전여부 : "+Device.isCharging()+"\n『🔌』전압상태 : "+Device.getBatteryVoltage()+"");
var cm = Api.getContext().getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
var net = cm.getActiveNetworkInfo();
replier.reply("인터넷종류: " + net.getTypeName());
  }}
}
