import Player from '@vimeo/player';

console.dir(Player);
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);


player.on('timeupdate', onPlay);


const onPlay = (evt) => {
   console.dir(evt.currentTarget)
};