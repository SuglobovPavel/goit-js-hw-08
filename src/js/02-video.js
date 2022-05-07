import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
const timeNow = localStorage.getItem("videoplayer-current-time");

if(timeNow){
   iframePlayer.setCurrentTime(timeNow).then(function(timeNow) {
      console.log("сработало");
  }).catch(function(error) {
      switch (error.name) {
          case 'RangeError':
             console.log("ошибка 1");
              break;
  
          default:
               console.log("ошибка другая");
              break;
      }
  });
}

const onPlay = function(data) {
   localStorage.setItem("videoplayer-current-time", data.seconds);
};

iframePlayer.on('timeupdate', throttle(onPlay, 1000));