
let data = {};
const time = 5; //딜레이 초.
const roomlist = [
    // 방 1
    {
    'name' : '카카오톡 봇 만들기 방&카카오톡 봇 질문방', 
    'in' : '(챗봇 입장알림)안녕하세요 /도움말 을 하여 챗봇의 많은 기능을 확인하세요', 
    'out' :'(챗봇 퇴장알림)잘가섽즈',
    'link' : 'https://open.kakao.com/o/gwNM2nwc'
    },

    // 방 2
    {
    'name' : '1', 
    'in' : '(챗봇 입장알림)안녕하세요 /도움말 을 하여 챗봇의 많은 기능을 확인하세요', 
    'out' :'(챗봇 퇴장알림)잘가섽즈',
    'link' : 'https://open.kakao.com/o/gyT0s8Xc'
    },
    // 방 3
    {
    'name' : '카카오톡 봇만들기 프로젝트 및 수다방', 
    'in' : '(챗봇 입장알림)안녕하세요 /도움말 을 하여 챗봇의 많은 기능을 확인하세요', 
    'out' :'(챗봇 퇴장알림)잘가섽즈',
    'link' : 'https://open.kakao.com/o/gJ9O0Twc'
    },
    // 방 4
    {
    'name' : '무료이모티콘알림 옾챗', 
    'in' : '(챗봇 입장알림)안녕하세요 /도움말 을 하여 챗봇의 많은 기능을 확인하세요', 
    'out' :'(챗봇 퇴장알림)잘가섽즈',
    'link' : 'https://open.kakao.com/o/gE1GIeGd'
    }
    
    
    
    ];

const Runnable = java.lang.Runnable;
const Executors = java.util.concurrent.Executors;
const TimeUnit = java.util.concurrent.TimeUnit;
const Context = android.content.Context;
const PowerManager = android.os.PowerManager;
let pm = Api.getContext().getSystemService(Context.POWER_SERVICE);
let wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "ChatBot");
wakeLock.acquire();

var timer = Executors.newSingleThreadScheduledExecutor().scheduleAtFixedRate(new Runnable({
    run: function () {
        for(let i = 0; i < roomlist.length; i++) {
            let site = JSON.parse(org.jsoup.Jsoup.connect('https://open.kakao.com/c/search/unified?q='+roomlist[i]['link']).ignoreContentType(true).get().text());
            if(site['count']!=1) continue;
            if(data[roomlist[i]['name']] == undefined) {
                data[roomlist[i]['name']] = {};
                data[roomlist[i]['name']]['member'] = site['items'][0]['mcnt'];
            }
                                
            if(data[roomlist[i]['name']]['member'] < site['items'][0]['mcnt']) {
                if(!Api.canReply(roomlist[i]['name'])) log.e('방 ['+roomlist[i]['name']+'] 에 메세지를 보낼 수 없습니다');
                else Api.replyRoom(roomlist[i]['name'], roomlist[i]['in']);
            } else if(data[roomlist[i]['name']]['member'] > site['items'][0]['mcnt']) {
                if(!Api.canReply(roomlist[i]['name'])) log.e('방 ['+roomlist[i]['name']+'] 에 메세지를 보낼 수 없습니다');
                else Api.replyRoom(roomlist[i]['name'], roomlist[i]['out']);
            }
            data[roomlist[i]['name']]['member'] = site['items'][0]['mcnt'];
        }
    }
}), 0, time * 333* 3, TimeUnit.MILLISECONDS);

function onStartCompile() {
    timer.cancel(false);
}