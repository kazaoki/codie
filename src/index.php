<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.min.css">
</head>
<body>

<h1 class="big-title">タイトル!!</h1>

<?php include 'header.php' ?>

<section>
	<h2>コーディング開始コマンド</h2>
	vscode上で <code>Ctrl+R</code> 後、<code>Shift+R</code> 。そして <code>start</code> を選択する。
	すると、処理が始まり、ブラウザが開く。
	<h2>仕様</h2>
	<ul class="list">
		<li>SASS→CSS自動コンパイル（<code>src/scss/*</code> → <code>dist/css/*</code>）</li>
		<li>画像は自動でサイズ圧縮（<code>src/images/*</code> → <code>dist/images/*</code>）</li>
		<li>JavaScriptはbabel[env]にて自動変換後、一つのファイルにバンドルします。（<code>src/js/*.js</code> → <code>dist/js/bundle.js</code>）</li>
		<li>htmlの他にphpも作成可能。共通パーツなどは別のphpファイルにして効率化を図りましょう。</li>
		<li>その他のそのままコピーしたいファイルは直下に `assets` ディレクトリを作成して入れるとコピーされます。</li>
	</ul>
	<div class="pictures">
		<img src="images/fruits.jpg">
		<img src="images/grape.jpg">
		<img src="images/strawberry.jpg">
	</div>
</section>

<?php include 'footer.php' ?>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="js/bundle.min.js"></script>

</body>
</html>
