# StepByStep

<!--  toc -->


## 使用说明

``` bash
$ git clone https://github.com/bojzi/sound-machine-electron-guide.git
$ git checkout <tag-name>
$ npm install
```

```
$ git tag
00-blank-repository
01-start-project
02-basic-sound-machine
03-closable-sound-machine
04-global-shortcuts-bound
05-settings-window-working
06-shortcuts-configurable
07-ready-for-packaging
```

## 任务目标

我们将完成的功能和探索的概念包括：

- T01：基础发声器（基本的浏览器窗口初始化），
- T02: 关闭发声器（在主进程和渲染进程之间**远程通信**），
- T03: 不需要把焦点切到应用就可以播放声音（全局快捷键），
- T04: 创建快捷键的设定界面，来变更键位（Shift，Ctrl和Alt）（保存在用户的个人文件夹设置中），
- T05: 加一个托盘图标（远程创建原生GUI元素，了解菜单和托盘图标），
- T06: 打包你的应用（把你的应用打包成 Mac，Windows，Linux下可用的版本）。

## 程序结构
.
├── LICENSE
├── main.js
├── package.json
├── app
    ├── css
    ├── img
    ├── index.html
    ├── js
    ├── settings.html
    └── wav

## 逐步重现

### T01

```
$ git checkout 01-start-project
```

程序入口``main.js``，直接加载 ``app/index.html``：

``` javascript
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
```

在``index.html``中并没有引用``node``，而是一个纯页面，可直接在本地用浏览器打开：

- 引用css

``` html
<head>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="css/index.css" rel="stylesheet" type="text/css"/>
</head>
```

- 引用图片

``` html
<div class="speaker">
    <img src="img/speaker.png"/>
</div>
```

- 引用js

``` html
<script src="js/index.js"></script>
```

但此时的``js/index.js``内容是空的。

阅读修改的内容可以存入新分支：``git checkout -b T01``

# 参考资料

- [扬声器](http://get.ftqq.com/7870.get)
