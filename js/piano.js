

const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','f','g','h','j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black')
// console.log(blackKeys);
// it is store all array of key
const keys = document.querySelectorAll('.key');
// console.log(keys);
keys.forEach(itemKey => {
    itemKey.addEventListener('click', () => onPlaySound(itemKey));
    // console.log(itemKey);
});
// for get value from key board
document.addEventListener('keydown', event => {
    const keyboard = event.key;
    // console.log(keyboard);
    // get array compare with
    const whiteKeyIdex = WHITE_KEYS.indexOf(keyboard);
    const blackKesIdex = BLACK_KEYS.indexOf(keyboard);
    // console.log(blackKesIdex);
    // repeat this is function that developer build already
    if(!event.repeat){
        // get value that have in array
        if(whiteKeyIdex > -1){
            onPlaySound(whiteKeys[whiteKeyIdex]);
        }
        if(blackKesIdex > -1){
            onPlaySound(blackKeys[blackKesIdex]);
        }
    }
    document.querySelector('.key').innerHTML = keyboard;
});

function onPlaySound(key) {
    // console.log(key)
    const audioKey = document.getElementById(key.dataset.note);
    audioKey.currentTime = 0;
    audioKey.play();
    key.classList.add('active');
    // when audio finish it is change background
    audioKey.addEventListener("ended", () =>{
        key.classList.remove('active');
    });
}
