### 目標：
* [ **component** ][1] でパッケージ化
* githubにアップする


### 何をつくるか：
**シングルページアプリ** ＋ **`boombox`** 利用して何か。案は以下。

* イントロクイズ
* Weave Weaver


### 使用ライブラリ・ツール：
* `gulp`
* `component`
* `underscore`
* `jquery`
* `bootstrap`

---

### Install
* `npm install -g component@1.0.0-rc5`
* `npm install -g gulp`
* `git clone https://github.com/varmil/try_boombox.git`
* `cd try_boombox`
* `npm install`
* `component build`


##### 編集時、変更を監視して自動buildさせる。
* `gulp watch`


##### Demo
* `npm install -g http-server`
* `cd try_boombox`
* `http-server -p 9999 ./`
* Go => [http://localhost:9999/index.html][2]


[1]: https://github.com/component/component
[2]: http://localhost:9999/index.html