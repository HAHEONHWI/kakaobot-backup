const FS=FileStream;
const path= '/sdcard/msgbot/files/해코';
let a=FS.read(path)
if(a==undefined)
FS.write(path,'{}');
a=JSON.parse(FS.read(path));
function response(room,msg,sender,isGroupChat,replier,ImageDB,packageName){
a[sender]=ImageDB.profileHash;
FS.write(path,JSON.stringify(a));
if(msg.startsWith('.hashcode ')){
let b=a[msg.slice(10).replace('@','').trim()];
replier.reply(b==undefined?'해시코드 정보가 존재하지 않습니다. 메세지를 보냈던 사람인지 확인해주세요.':b);
}
}
