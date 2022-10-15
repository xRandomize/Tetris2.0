<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P">
    <title>Tetris</title>
</head>
<body>
    <canvas id="canvas"></canvas>
    
    <div class="System">
        <h1>TETRIS<h1>
        <p>SCORE:<span id="score">0</span><p>
        <p>LEVEL:<span id="level">0</span><p>
    </div>

    <script src="Constants.js"></script>
    <script src="SpawnPieces.js"></script>
    <script src="gameStart.js"></script>
    <script src="gameModel.js"></script>
</body>
</html>
