if (API.enabled && $("#radiantscript-css").length <= 0) {

    var radiantScript = {

        version     : 0.60,
        autoWoot    : false,
        cAutoWoot   : '',
        pointWhore  : false,
        cpointWhore : '',

        setCookie: function (key, value) {          
            var expires = new Date();
            expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';path=/;expires=' + expires.toUTCString();   
        },

        getCookie: function (key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        },   

        toggleAutoWoot: function() {
            this.autoWoot = !this.autoWoot;     
            this.cAutoWoot = this.autoWoot ? 'checked' : '';

            if (this.autoWoot) { $('#woot').click(); }
            this.setCookie("COOKIE_AUTO_WOOT", this.autoWoot); 
        },   

        togglePointWhore: function(obj) {
            this.pointWhore = !this.pointWhore;     
            this.cpointWhore = this.pointWhore ? 'checked' : '';
            if (this.pointWhore) {
                radiantScript.pointWhoreScore();
            }
            this.setCookie("COOKIE_POINT_WHORE", this.pointWhore); 
        },

        addChatLog: function(message, cssClass) {
            $('#chat-messages').append('<div class="update ' + cssClass + '">' + message + '</div>');
            $('#chat-messages').scrollTop($('#chat-messages').prop("scrollHeight"));
        },

        playChatSound: function() {
            document.getElementById('chat-sound').playChatSound();
        },

        playMentionSound: function() {
            document.getElementById('chat-sound').playMentionSound();
        },

        pointWhoreScore: function(obj) {
            if (radiantScript.pointWhore) {
                var a = API.getUser().listenerPoints + API.getUser().djPoints + API.getUser().curatorPoints;
                var tier01 = 100; var tier02 = 300; var tier03 = 700; var tier04 = 1500; var tier05 = 3000; var tier06 = 7000; var tier07 = 15000; var tier08 = 30000; var tier09 = 50000; var tier10 = 75000; var tier11 = 100000; var tier12 = 150000; var tier13 = 200000; var tier14 = 250000; var tier15 = 300000; var tier16 = 350000; var tier17 = 400000; var tier18 = 450000; var tier19 = 500000; var tier20 = 550000; var tier21 = 600000; var tier22 = 700000; var tier23 = 750000; var tier24 = 800000; var tier25 = 850000; var tier26 = 900000; var tier27 = 950000; var tier28 = 1000000;
                if (a <= tier01) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier01) + ': ' + new Intl.NumberFormat().format(tier01 - a)); };
                if (a <= tier02 && a > tier01) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier02) + ': ' + new Intl.NumberFormat().format(tier02 - a)); };
                if (a <= tier03 && a > tier02) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier03) + ': ' + new Intl.NumberFormat().format(tier03 - a)); };
                if (a <= tier04 && a > tier03) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier04) + ': ' + new Intl.NumberFormat().format(tier04 - a)); };
                if (a <= tier05 && a > tier04) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier05) + ': ' + new Intl.NumberFormat().format(tier05 - a)); };
                if (a <= tier06 && a > tier05) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier06) + ': ' + new Intl.NumberFormat().format(tier06 - a)); };
                if (a <= tier07 && a > tier06) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier07) + ': ' + new Intl.NumberFormat().format(tier07 - a)); };
                if (a <= tier08 && a > tier07) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier08) + ': ' + new Intl.NumberFormat().format(tier08 - a)); };
                if (a <= tier09 && a > tier08) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier09) + ': ' + new Intl.NumberFormat().format(tier09 - a)); };
                if (a <= tier10 && a > tier09) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier10) + ': ' + new Intl.NumberFormat().format(tier10 - a)); };
                if (a <= tier11 && a > tier10) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier11) + ': ' + new Intl.NumberFormat().format(tier11 - a)); };
                if (a <= tier12 && a > tier11) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier12) + ': ' + new Intl.NumberFormat().format(tier12 - a)); };
                if (a <= tier13 && a > tier12) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier13) + ': ' + new Intl.NumberFormat().format(tier13 - a)); };
                if (a <= tier14 && a > tier13) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier14) + ': ' + new Intl.NumberFormat().format(tier14 - a)); };
                if (a <= tier15 && a > tier14) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier15) + ': ' + new Intl.NumberFormat().format(tier15 - a)); };
                if (a <= tier16 && a > tier15) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier16) + ': ' + new Intl.NumberFormat().format(tier16 - a)); };
                if (a <= tier17 && a > tier16) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier17) + ': ' + new Intl.NumberFormat().format(tier17 - a)); };
                if (a <= tier18 && a > tier17) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier18) + ': ' + new Intl.NumberFormat().format(tier18 - a)); };
                if (a <= tier19 && a > tier18) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier19) + ': ' + new Intl.NumberFormat().format(tier19 - a)); };
                if (a <= tier20 && a > tier19) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier20) + ': ' + new Intl.NumberFormat().format(tier20 - a)); };
                if (a <= tier21 && a > tier20) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier21) + ': ' + new Intl.NumberFormat().format(tier21 - a)); };
                if (a <= tier22 && a > tier21) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier22) + ': ' + new Intl.NumberFormat().format(tier22 - a)); };
                if (a <= tier23 && a > tier22) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier23) + ': ' + new Intl.NumberFormat().format(tier23 - a)); };
                if (a <= tier24 && a > tier23) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier24) + ': ' + new Intl.NumberFormat().format(tier24 - a)); };
                if (a <= tier25 && a > tier24) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier25) + ': ' + new Intl.NumberFormat().format(tier25 - a)); };
                if (a <= tier26 && a > tier25) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier26) + ': ' + new Intl.NumberFormat().format(tier26 - a)); };
                if (a <= tier27 && a > tier26) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier27) + ': ' + new Intl.NumberFormat().format(tier27 - a)); };
                if (a <= tier28 && a > tier27) { API.chatLog('Points till ' + new Intl.NumberFormat().format(tier28) + ': ' + new Intl.NumberFormat().format(tier28 - a)); };
            }
        },

        updateQueueStatus: function() {            
            if(API.getWaitListPosition() == '0') {
                radiantScript.addChatLog('Get ready ' + this.userInfo.username + ', you\'re about to play!', 'aqua');
                $('#waitlist-button').addClass('blue-bg');     
                radiantScript.playChatSound();   
                radiantScript.playMentionSound();           
            }
            else {                      
                $('#waitlist-button').removeClass('blue-bg');                                  
            }
        },

        djAdvanced: function(obj) {
            if (radiantScript.autoWoot) { setTimeout(function() { $('#woot').click(); }, 2000); }
            radiantScript.updateQueueStatus();
        },

        init: function() {

            this.autoWoot    = this.getCookie('COOKIE_AUTO_WOOT') == 'true' ?  true : false;  
            this.pointWhore  = this.getCookie('COOKIE_POINT_WHORE') == 'true' ?  true : false;               
            this.cAutoWoot   = this.autoWoot   ? 'checked' : ''; 
            this.cPointWhore = this.pointWhore ? 'checked' : '';   
            this.userInfo    = API.getUser();

            if(this.autoWoot) { $('#woot').click(); }      
            this.updateQueueStatus();

            API.on(API.DJ_ADVANCE, this.djAdvanced); 
            API.on(API.DJ_ADVANCE, this.pointWhoreScore);

            $('#now-playing-media').hover(function(){
            $('body').append('<div id="tooltip" style="top:0px;left:550px;"><span>' + API.getMedia().author + ' - ' + API.getMedia().title + '</span><div class="corner"></div></div>');
                },function(){
                    $('#tooltip').remove();
                });         
            $('#dj-booth').append('<div id="rmbooth" style="background-image: url(http://radiantedm.com/rmscript/img/djbooth.png);"></div>');
            $(".background").find('img').attr('src','http://radiantedm.com/rmscript/img/radiant.music.playback1.png');

            cleanASCII = function(a) {
              var b = a.split("&#");
                  for (var c = 1;c < b.length;c++) {
                  var d = b[c].split(";")[0];
                      a = a.replace("&#" + d + ";",String.fromCharCode(d));
                  }
                  a = a.split('&lt;').join('<').split('&gt;').join('>').split('&amp;').join('&').split('&quot;').join('"');
                  return a;
                };
            function f_chtlggr (data){
                var str = data.from;
                var ns = str.length;
                var msg = cleanASCII(data.message);
                var log = function () {
                    return console.log.apply(
                        console,
                        ['['+new Date().toISOString().slice(11,-5)+']'].concat(
                            Array.prototype.slice.call(arguments)
                        )
                    );
                };
                switch(data.type){
                     case("message"):
                            log("(" + data.fromID + ") " + Array(25 - ns).join(" ") + "" + data.from + " : " + msg );
                            break;
                     case("emote"):
                            log("(" + data.fromID + ") " + Array(25 - ns).join(" ") + "" + data.from + " : /me: " + msg );
                            break;
                     case("mention"):
                         log("(" + data.fromID + ") " + Array(25 - ns).join(" ") + "" + data.from + " : " + msg );
                     break;
                }
            }
            function f_votelggr (obj){
                    if (obj.vote != 1){
                    API.chatLog(obj.user.username + " meh'd this track", true);
                }
            }
            API.on(API.VOTE_UPDATE, f_votelggr);
            API.on(API.CHAT, f_chtlggr);
            // End of chat logger
            API.on(API.CHAT_COMMAND, customCommands);
            function customCommands(value) {
                if (value == '/lock') {
                    API.moderateLockWaitList(true);
                }
                if (value == '/unlock') {
                    API.moderateLockWaitList(false);
                }
                if (value == '/clearlock') {
                    API.moderateLockWaitList(true,true);
                }
                if (value == '/clearwait') {
                    API.moderateLockWaitList(true,true);
                    setTimeout(function() { 
                        API.moderateLockWaitList(false);
                        API.sendChat("/em just cleared the Waitlist!"); 
                    },2000);
                }
                if (value == '/cycleon') {
                    $.ajax({
                        type: 'POST',
                        url: 'http://plug.dj/_/gateway/room.cycle_booth',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            service: "room.cycle_booth",
                            body: [window.location.pathname.replace(/\//g, ''),true]
                        })
                    });
                }
                if (value == '/cycleoff') {
                    $.ajax({
                        type: 'POST',
                        url: 'http://plug.dj/_/gateway/room.cycle_booth',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            service: "room.cycle_booth",
                            body: [window.location.pathname.replace(/\//g, ''),false]
                        })
                    });
                }
                if (value == '/skip') {
                    API.moderateForceSkip();
                }
                if (value == '/5') {
                    API.chatLog("Status set to 5 (Bugged)");
                    $.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_status', contentType: 'application/json', data: '{ "service": "user.set_status", "body": ["5"] }' });
                }
                if (value == '/4') {
                    API.chatLog("Status set to 4 (Idle)");
                    $.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_status', contentType: 'application/json', data: '{ "service": "user.set_status", "body": ["4"] }' });
                }
                if (value == '/3') {
                    API.chatLog("Status set to 3 (Gaming)");
                    $.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_status', contentType: 'application/json', data: '{ "service": "user.set_status", "body": ["3"] }' });
                }
                if (value == '/2') {
                    API.chatLog("Status set to 2 (Working)");
                    $.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_status', contentType: 'application/json', data: '{ "service": "user.set_status", "body": ["2"] }' });
                }
                if (value == '/1') {
                    API.chatLog("Status set to 1 (AFK)");
                    $.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_status', contentType: 'application/json', data: '{ "service": "user.set_status", "body": ["1"] }' });
                }
                if (value == '/0') {
                    API.chatLog("Status set to 0 (Available)");
                    $.ajax({ type: 'POST', url: 'http://plug.dj/_/gateway/user.set_status', contentType: 'application/json', data: '{ "service": "user.set_status", "body": ["0"] }' });
                }
            }
        },

    }           

    console.log('Loaded Radiant Script v' + radiantScript.version);       
    radiantScript.addChatLog('Running Radiant Script v' + radiantScript.version, 'aqua');
    radiantScript.addChatLog('Staff only. Don\'t share!', 'orange');   
    radiantScript.init();  
    var plugCubed;
    var content = '<section id="radiantscript">\
        <h3>Radiant Script</h3>\
        <p class="version">bookmarklet for plug.dj</p>\
        <p>Auto Woot?</p>\
        <div class="onoffswitch">\
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="checkbox-autowoot" ' + radiantScript.cAutoWoot + '>\
            <label class="onoffswitch-label" for="checkbox-autowoot">\
                <div class="onoffswitch-inner"></div>\
                <div class="onoffswitch-switch"></div>\
            </label>\
        </div>\
        <p>Point Countdown?</p>\
        <div class="onoffswitch">\
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="checkbox-pointwhore" ' + radiantScript.cPointWhore + '>\
            <label class="onoffswitch-label" for="checkbox-pointwhore">\
                <div class="onoffswitch-inner"></div>\
                <div class="onoffswitch-switch"></div>\
            </label>\
        </div>\
        <p class="version">Staff only Script!</p>\
        <p class="version">version ' + radiantScript.version + '</p>\
    </section>';
    var content2 = '<section id="radiantscriptRight">\
    <div id="socialrm-fb"></div>\
    <div id="socialrm-tw"></div>\
    </section>';

    $('body').prepend('<link rel="stylesheet" type="text/css" id="radiantscript-css" href="http://radiantedm.com/plugdj/radiantscript.css?v=' + radiantScript.version + '" />');  
    $('#room').append(content);     
    $('#room').append(content2); 

    $('#checkbox-autowoot').on('click', function() { radiantScript.toggleAutoWoot();  });   
    $('#checkbox-pointwhore').on('click', function() { radiantScript.togglePointWhore();  }); 
    $('#socialrm-fb').on('click', function() { window.open('http://facebook.com/RadiantEDM');  }); 
    $('#socialrm-tw').on('click', function() { window.open('http://twitter.com/RadiantEDM');  }); 

    $('#chat-messages').on('click', '.timestamp', function() {
    if ($(this).parent().find('.delete-button span').length === 0) {
        var id = $(this).parent().attr('class').split(' ');
        if(typeof plugCubed === 'undefined'){
           ((id.length === 2) ? id = id[1].substr(4) : id = id[2].substr(4))
           }
        else{
           var chat = $(this).parent();
           if(chat.hasClass('is-p3vip') ||  chat.hasClass('is-p3sponsor') || chat.hasClass('is-p3donator') || chat.hasClass('is-p3donatorBronze') || chat.hasClass('is-p3donatorSilver') || chat.hasClass('is-p3developerGold') || chat.hasClass('is-p3donatorPlatinum') || chat.hasClass('is-p3donatorDiamond') || chat.hasClass('is-p3special')){
               id = id[4].substr(4);
        }
        else{
            ((id.length === 3) ? id = id[2].substr(4) : id = id[3].substr(4))
        }
    }
    return API.moderateDeleteChat(id);
    } else return false;
    });
}
else {
    $('#radiantscript').fadeIn();
    console.log('Radiant Script v' + radiantScript.version + ' already loaded');
    API.chatLog('Radiant Script v' + radiantScript.version + ' already loaded', true);    
}
if (plugCubed === undefined) {
    setTimeout(function() { 
        $.getScript('https://d1rfegul30378.cloudfront.net/alpha/plugCubed.js');
        //$.getScript('https://d1rfegul30378.cloudfront.net/alpha/plugCubed.js');
        //$.getScript('https://d1rfegul30378.cloudfront.net/files/plugCubed.js');
    },750);
}
