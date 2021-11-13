let read={}; 
​
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName){ 
if(read[room]==undefined) read[room]=0; read[room]++; 
if(read[room]>300) { 
replier.markAsRead();
read[room]=0; 
Api.reload("카링.js");
}
} 
