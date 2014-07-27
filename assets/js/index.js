var _ = require("underscore");
var $ = require("jquery");

// ----------

   // short-cut dom
   $info = $("#info");
   $debug = $("#debug");
   // log
   var debug = function (msg) {
     $debug.append(msg + '\n');
     $debug.scrollTop($debug[0].scrollHeight);
   };

   // Events
   $("#play").click(function (e) {
     boombox.get('single').play();
     debug('## play');
   });
   $("#stop").click(function (e) {
     boombox.get('single').stop();
     debug('## stop');
   });
   $("#pause").click(function (e) {
     boombox.get('single').pause();
     debug('## pause');
   });
   $("#resume").click(function (e) {
     boombox.get('single').resume();
     debug('## resume');
   });
   $("#replay").click(function (e) {
     boombox.get('single').replay();
     debug('## replay');
   });
   $("#volume").change(function (e) {
     var volume = e.currentTarget.value;
     debug('## volume: ' + volume);
     boombox.get('single').volume(volume);
   });


   // boombox running
   boombox.setup({
     webaudio: {
       //use: false // force override
     },
     htmlaudio: {
       //use: true // force override
     },
     htmlvideo: {
       //use: true // force override
     }
   });

	// var bgm = ["bgm", "./media/sound.m4a"];
   var options = {
     src: [
       {
         media: 'audio/mp4',
         path: './assets/sound/sound.m4a'
       }
     ]
   };

   boombox.load('single', options, function (err, htmlaudio) {
     $info.append(htmlaudio.$el);
     debug("## sound loaded. used: " + boombox.pool.single.constructor.name);
   });

   $info.append('<hr />');
   $info.append('State of boombox.js<br />');
   $info.append('webaudio: '  + boombox.isWebAudio() + '<br />');
   $info.append('htmlaudio: ' + boombox.isHTMLAudio() + '<br />');
   $info.append('htmlvideo: ' + boombox.isHTMLVideo() + '<br />');

   $info.append('<hr />');
   $info.append('Browser Support<br />');
   $info.append('webaudio: ' + !!window.webkitAudioContext + '<br />');
   $info.append('htmlaudio: ' + !!window.Audio + '<br />');
   $info.append('htmlvideo: ' + !!document.createElement('video') + '<br />');
