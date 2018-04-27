
# カザオキコーディングツール


（README編集中...）

ver. 0.0.2018.4.27

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー概要

1. カザオキコーディングツールを以下からダウンロード/解凍し、案件フォルダに配置する  
   https://github.com/kazaoki/coding-template/archive/master.zip
2. VisualStudioCode で該当フォルダを開く
3. npmスクリプト `setup` を実行すると、初期化＆Gitリポジトリが作られる
4. Gitで一旦コミットする
5. npmスクリプト `start` を実行する
6. `src/` フォルダで作業を進める
7. 作業完了したらコミット、必要ならPUSH
8. 次回作業時は 4. から開始
9. 作業完了なら `dist/` を納品・アップして終了

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー1：カザオキコーディングツールのダウンロード/配置

[ZIPファイルをダウンロード](https://github.com/kazaoki/coding-template/archive/master.zip)して解凍し、プロジェクトのフォルダの中に配置して下さい。
以下、サンプルサイトAの案件フォルダ `sample-a` に `coding` フォルダとして配置する例です。フォルダ名は `coding` 以外でも、日本語でも、なんでも大丈夫です。

```
sample-a/
  ├─ ...
  ├─ ...
  ├─ ...
  └─ coding/ （ここに配置します。ここをGitでバージョン管理していきます）
      ├─ .vscode
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
そして、上記の `coding` フォルダを vscode にドロップします。
これで、このフォルダ以下のファイルを管理できるようになります。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー3：code で該当フォルダを開く。

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー4：Gitで一旦コミットする

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー5：npmスクリプト `start` を実行する

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー6：`src/` フォルダで作業を進める

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー7：作業完了したらコミット、必要ならPUSH

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー8：次回作業時は 4. から開始

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## 作業フロー9：作業完了なら `dist/` を納品・アップして終了

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

必ず準備するもの
-------------

### ソフトウェア
- Windows または macOS
- [VisualStudioCode](https://www.microsoft.com/ja-jp/dev/products/code-vs.aspx)
- [Node.js](https://nodejs.org/ja/)（8.ｘ以降の推奨版）
- [PHP](http://php.net/downloads.php)（7.ｘ系のStable版）
- [SourceTree](https://www.sourcetreeapp.com/)

### 設定
- [隠しファイル・フォルダの表示（Windows）](https://helpx.adobe.com/jp/x-productkb/global/cpsid_87117.html)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

準備しておくといいもの
-------------------------

### ソフトウェア
- [Adobe Illustrator](https://www.adobe.com/jp/products/illustrator.html)
- [Adobe Photoshop](https://www.adobe.com/jp/products/photoshop.html)
- [Adobe Fireworks](https://www.adobe.com/jp/products/fireworks.html)
- [Adobe Creative Cloud](https://www.adobe.com/jp/creativecloud.html)
- [Adobe XD](https://www.adobe.com/jp/products/xd.html)
- [Figma](https://www.figma.com/)
- [Sketch](https://www.sketchapp.com/)
- [Franz](https://meetfranz.com/)

### ウェブサービス
- [GitHub](https://github.co.jp/)
- [Bitbucket](https://bitbucket.org/product)
- [chatwork](https://go.chatwork.com/ja/)
- [Slack](https://slack.com/intl/ja-jp)
- [Skype](https://www.skype.com/ja/)
- [Gmail](https://mail.google.com/)
- [Trello](https://trello.com/)

### 設定
- code設定各種
- コーディングフォント
	- [Fira Code](https://qiita.com/shuntksh/items/1995e87fe5c1ac88296f)
	- [Myrica](https://myrica.estable.jp/)
