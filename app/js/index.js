'use strict';

var soundButtons = document.querySelectorAll('.button-sound');

for (var i = 0; i < soundButtons.length; i++) {
    var soundButton = soundButtons[i];
    var soundName = soundButton.attributes['data-sound'].value;

    prepareButton(soundButton, soundName);
}

function prepareButton(buttonEl, soundName) {
    buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

    var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });
}

var ipc = require('ipc');

var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
});

ipc.on('global-shortcut', function (scid) {
    if (scid == 0) {
        var audio = new Audio(__dirname + '/wav/' + 'money' + '.wav');
        audio.play();

    } else {
        var event = new MouseEvent('click');
        soundButtons[scid].dispatchEvent(event);
    }

});

ipc.on('ctrl-shift-3', function() {
    console.log('单独快键键：' + 'ctrl-shift-3');
});