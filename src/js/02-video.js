import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Vimeo.Player(iframe);
const timeNow = localStorage.getItem("videoplayer-current-time");

if(timeNow){
    iframePlayer.setCurrentTime(timeNow);
}

const onPlay = function(data) {
   localStorage.setItem("videoplayer-current-time", data.seconds);
};

iframePlayer.on('timeupdate', throttle(onPlay, 1000));