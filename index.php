<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> <!--Connects CSS to index.php-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P"> <!--Tetris Font-->
    <title>Tetris</title>
</head>
<body>
    <canvas id="canvas"></canvas> <!--Initiate the canvas-->
    
    <div class="stats"> <!--Sets up stats such as Scoreboard and what level-->
        <h1>TETRIS<h1>
        <p><span id="score">0</span><p>
        <p>LEVEL:<span id="level"> 0</span><p>
    </div>

    <!--Connects all of the javascripts to the index.php file and is in order of top-down programming-->
    <script src="Constants.js"></script> 
    <script src="SpawnPieces.js"></script>
    <script src="gameModel.js"></script>
    <script src="gameStart.js"></script>
</body>
</html>
