import Player from '@vimeo/player';

console.dir();
const iframe = document.querySelector('iframe');

const player = new Player(iframe);


player.on('timeupdate', _.throttle(onPlay, 1000));


function onPlay(evt) {
    console.log(evt.seconds);
   localStorage.setItem("videoplayer-current-time", `${evt.seconds}`);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});