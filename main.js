'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

// 快捷键
var globalShortcut = require('global-shortcut');

// 进程间通信
var ipc = require('ipc');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        resizable: false,
        width: 368
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

    // global shortcut events register
    globalShortcut.register('ctrl+shift+1', function () {
        mainWindow.webContents.send('global-shortcut', 0);
           // ipc.send('global-shortcut', 0);
    });
    globalShortcut.register('ctrl+shift+2', function () {
        mainWindow.webContents.send('global-shortcut', 1);
        // ipc.send('global-shortcut', 1);
    });

    globalShortcut.register('ctrl+shift+3', function () {
        ipc.send('ctrl-shift-3');
    });

});


ipc.on('close-main-window', function () {
    app.quit();
});
