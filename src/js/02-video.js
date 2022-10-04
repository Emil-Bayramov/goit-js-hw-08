'use strict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle'



const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onTimeUpdate, 888));


function onTimeUpdate (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
}

const timeUpd = Number(localStorage.getItem('videoplayer-current-time'))

player.setCurrentTime(timeUpd).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});