
# カザオキコーディングツール


（README編集中...）

ver. 0.0.2018.5.16

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー概要

1. カザオキコーディングツールを以下からダウンロード/解凍し、案件フォルダ内に配置する  
   https://github.com/kazaoki/coding-tool/archive/master.zip
2. VisualStudioCode で該当フォルダを開く
3. npmスクリプト `setup` を実行すると、初期化＆Gitリポジトリが作られる
4. Gitで一旦コミットする
5. npmスクリプト `start` を実行する **※次回作業時はここから**
6. `src/` フォルダで作業を進める
7. 作業完了したらコミット、必要ならPUSH
8. 作業完了なら `dist/` を納品・アップして終了

詳説は以下から。上記番号に対応しています。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー1：カザオキコーディングツールのダウンロード/配置

[ZIPファイルをダウンロード](https://github.com/kazaoki/coding-tool/archive/master.zip)して解凍し、プロジェクトのフォルダの中に配置して下さい。
以下、サンプルサイトAの案件フォルダ `sample-a` に `coding` フォルダとして配置する例です。フォルダ名は `coding` 以外でも、日本語でも、なんでも大丈夫です。

```
sample-a/
  ├─ ...
  └─ coding/ （ここに配置します。ここをGitでバージョン管理していきます）
      ├─ .vscode/
      ├─ src/
      │   ├─ images/
      │   │  └─ ~.jpg
      │   ├─ js/
      │   │  └─ ~.js
      │   ├─ scss/
      │   │  └─ ~.scss
      │   ├─ footer.php
      │   ├─ header.php
      │   └─ index.php
      ├─ .editorconfig
      ├─ .gitignore
      ├─ gulpfile.js
      ├─ package.json
      └─ yarn.lock
```

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー2：VisualStudioCode で該当フォルダを開く

[VisualStudioCode](https://www.microsoft.com/ja-jp/dev/products/code-vs.aspx) を起動します。（以下 vscode）

次に、上記の `coding` フォルダを vscode にドロップします。

これで、このフォルダ以下を vscode で管理できるようになります。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー3：npmスクリプト `setup` でセットアップ

vscode 上で `Ctrl+R` を押した後 `Shift+R` を押すと、npmスクリプトのリストが出てきますので、 `setup` を実行します。

このセットアップスクリプトは最初の１回の実行で大丈夫です。新たに以下のフォルダが作られます。（間違って何度実行しても問題は無いです）

```
.git/
.node_modules/
```

`.git/` は `coding` フォルダをGitでバージョン管理するための設定です。

`.node_modules/` は、コーディングツールを実行するために必要なプログラムがダウンロードされてきます。

この２つのフォルダはバージョン管理外となりますので、 `.gitignore` ファイルで除外定義されています。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー4：Gitで一旦コミットする

ここまでの状態を一旦Gitコミットしておきます。
[SourceTree](https://www.sourcetreeapp.com/) を起動し、 `coding` フォルダを登録し、初期コミットしましょう。

以下、コミットメッセージ例です。
```
[add] 初期コミット
```

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー5：npmスクリプト `start` を実行する

※作業を中断した場合など、次回続きから作業したい場合は、ここから行います。

作業フロー3と同様に、vscode 上で `Ctrl+R` を押した後 `Shift+R` を押すと、npmスクリプトのリストが出てきますので、今度は `start` を実行します。

コーディングツールの起動が完了するとブラウザが開きます。（[http://localhost:3000/](http://localhost:3000/)）

`dist/` フォルダが作成され、この中をブラウザからアクセスしている形となります。

この段階で、フォルダ構成は以下のようになっています。

```
sample-a/
  ├─ ...
  └─ coding/ 
      ├─ .git/ （このフォルダが生成されています）
      ├─ .vscode/
      ├─ dist/ （このフォルダが生成されています）
      ├─ node_modules/ （このフォルダが生成されています）
      ├─ src/
      │ ...
```

もし、削除したなど上記のフォルダ足りない場合は、「作業フロー3」の `setup` スクリプトを再度実行すれば生成されます。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー6：`src/` フォルダで作業を進める

コーディングツールを起動すると、`src/`（入力フォルダ） 内のファイルを処理し `dist/`（出力フォルダ）に保存します。
入力フォルダ内で、対象のファイルが作成/更新されると、出力フォルダのファイルも自動的に再処理が行われ更新されます。

※初期状態でブラウザで見えている画面は、 `dist/index.php` です。このファイルを編集して保存すると自動的にブラウザがリロードされることが確認できると思います。

```
src/js/*.js ... 圧縮され１つのJavacScriptファイルにバンドルされます。 → dist/js/bundle.js
src/images/* ... 画像ファイル → jpg,png,gifファイルのサイズが軽減されます。 → dist/images/*
src/scss/*.scss ... Sassファイルがコンパイルされます。 → dist/css/*.css
src/assets/* ... 特に処理が不要なjs,css,画像ファイル（jQuery等ダウンロードしてきたものなど）はこのフォルダを作成し配置します → dist/assets/*
src/*.php,*.html ... srcフォルダ以下の全てのHTML,PHPファイルはそのままコピーされます。 → dist/*
```

`dist/` に出力される際は、フォルダ構成も維持されますので、指定フォルダ以下であれば自由に下層化して大丈夫です。

また、ファイルを更新するとブラウザ側も自動的にリロードされます。
同じURLを別のブラウザからアクセスすると、クリックやスクロールも同期されます。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー7：作業完了したらコミット、必要ならPUSH

作業が完了、または一時中断した場合は、作業した情報をコミットしましょう。
作業フロー4と同様に、コミットします。

以下、コミットメッセージ例です。
```
[add] トップページコーディング完了。
```

必要があればPUSHしてください。

ここで、vscode を終了するとブラウザからもアクセスができなくなります。
再度作業を再開したい場合は、 vscode でフォルダを開いて、「作業フロー5」から行います。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー8：作業完了なら `dist/` を納品・アップして終了

実際にFTPでアップロードしたりお客様に納品するのは `dist/` フォルダになるかと思いますが、作業者が複数いる場合はGitリポジトリを共有して、 `coding` フォルダ全体を共有してください。（先方で `dist/` 側のファイルを修正されると、 `src/` 側のファイルの修正が大変になると思いますので、なるべく作業者は `src/` 側を編集することをおすすめします）

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

必ず準備するもの
-------------

上記の作業説明に必要なソフトウェア群です。
必ずインストールしてください。

### ソフトウェア
- Windows または macOS
- [VisualStudioCode](https://www.microsoft.com/ja-jp/dev/products/code-vs.aspx)
- [Node.js](https://nodejs.org/ja/)（8.ｘ以降の推奨版）
- [PHP](http://php.net/downloads.php)（7.ｘ系のStable版）
- [SourceTree](https://www.sourcetreeapp.com/)

### 設定
- [隠しファイル・フォルダの表示（Windows）](https://helpx.adobe.com/jp/x-productkb/global/cpsid_87117.html)  
  ※ `.git` フォルダ等の隠しファイルはWindows初期状態だと見えないので、必ず表示するようにしてください。　

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

準備しておくといいもの
-------------------------

ウェブ制作/開発をするにあたり、個人的におすすめのツールです。

### ソフトウェア
- [Adobe Illustrator](https://www.adobe.com/jp/products/illustrator.html) ... 言わずと知れたベクタデザインソフト。ウェブデザインはかなりツライ。
- [Adobe Photoshop](https://www.adobe.com/jp/products/photoshop.html) ... 言わずと知れたラスタ画像処理ソフト。ウェブデザインはかなりツライ。
- [Adobe Fireworks](https://www.adobe.com/jp/products/fireworks.html) ... 一昔前のウェブデザインソフト。流石にツライ。
- [Adobe Creative Cloud](https://www.adobe.com/jp/creativecloud.html) ... 月額数千円で最新のAdobeソフトが使えるプログラム。超おすすめ。
- [Adobe XD](https://www.adobe.com/jp/products/xd.html) ... Adobe待望のウェブデザインソフト。共同作業可能。
- [Sketch](https://www.sketchapp.com/) ... ウェブデザインソフト/サービス。たぶん今一番人気。
- [Figma](https://www.figma.com/) ... ウェブデザインソフト/サービス。共同作業が評判。ブラウザからも作業でき、無料プランも有り。オススメです。
- [Franz](https://meetfranz.com/) ... 以下の「ウェブサービス」をひとまとめにして管理できるソフト。超オススメ。

### ウェブサービス
- [GitHub](https://github.co.jp/) ... Gitリモートリポジトリサービス。プライベート（非公開）リポジトリは有料。
- [Bitbucket](https://bitbucket.org/product) ... Gitリモートリポジトリサービス。プライベート（非公開）リポジトリ無料。
- [chatwork](https://go.chatwork.com/ja/) ... ビジネス向けメッセージングサービス。
- [Slack](https://slack.com/intl/ja-jp) ... ビジネス向けメッセージングサービス。
- [Gmail](https://mail.google.com/) ... 無料メールサービス。
- [Trello](https://trello.com/) ... ToDoリスト管理サービス。

### 設定
- vscode設定各種
- コーディングフォント
	- [Fira Code](https://qiita.com/shuntksh/items/1995e87fe5c1ac88296f)
	- [Myrica](https://myrica.estable.jp/)
