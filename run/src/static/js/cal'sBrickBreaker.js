/*
    name:       collision-detection.js 
    version:    3.2 - 10/12/17
*/

/* ************************************************************* */
//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded, false);

/* ************************************************************* */
//eventWindowLoaded()
//Called when the window has been loaded it then calls the canvasapp() 

function eventWindowLoaded() {
    canvasApp();
} // eventWindowLoaded()
 
/* ************************************************************* */
//canvasSupport() 
//Check for Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
} // canvasSupport()

/* ************************************************************* */
//canvasApp() 
//The function where ALL our canvas code will go

function canvasApp() {

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Canvas Support */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return;
    } //if 

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Utility Functions */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    // -----------------------------------------------------------
    //function for getting a random number with in a range	
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    } //getRandom

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Canvas Variables */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas"); //get the canvas element
    var context = theCanvas.getContext("2d"); //get the context
    var canvasHieght = theCanvas.height; //get the heigth of the canvas
    var canvasWidth = theCanvas.width; //get the width of the canvas
    var canvasColor = "white"; //starting bg color

    //Paddle variables
    var gamePieceHieght = 5;
    var gamePieceWidth = 100;
    var gamePieceSpeed = 2;
    var gamePiece = []
    var piece = {
        x: canvasWidth/2 - gamePieceWidth/2,
        y: canvasHieght - gamePieceHieght - 10,
        w: gamePieceWidth,
        h: gamePieceHieght,
        color: "black"
    }
    
    
    var playing = true;
    
    //Block variables
    var opacity = 1;
    var blocksHieght = 30;
    var blockWidth = 40;
    var blockColor = "brown";
    var blocks = [];
    var allBlocks = [];
    var blockColors = "R"
   
    //create array for blocks
    for(x=0;x<4;x++){
        allBlocks[x]=[];
        for(i=0;i<20;i++){
            allBlocks[x][i] = {
                x: 0+(i*blockWidth),
                y: 40 + (x*80),
                w: blockWidth,
                h: blocksHieght,
                color: "rgba(" + getRandom(0,240) + "," + getRandom(0,240) + "," + getRandom(0,240) + "," + opacity + ")",
                border: "black",
            }
        }
    }
    
    
    
    
   //circle variables
    var circleSize = 20;
    var circleSpeed = -1;
    var circleColor = "rgba(" + getRandom(0,240) + "," + getRandom(0,240) + "," + getRandom(0,240) + "," + opacity + ")";
    
    var circle = {
        x: getRandom(20,canvasWidth-20),
        y: canvasHieght - gamePieceHieght-10-(circleSize/2),
        size: circleSize,
        color: circleColor,
        moveX: circleSpeed,
        moveY: circleSpeed,
        
    };
    
    //draw circle
    function drawCircle( c ) {
        
        context.beginPath(); 
        context.arc( c.x, c.y, c.size/2, 0, Math.PI * 2 );
        context.fillStyle = c.color;
        context.fill(); 			
        context.closePath(); 
   
    } //drawCircle()
    
    function drawGamePiece(){
        context.beginPath();
        context.fillStyle = piece.color;
        context.fillRect(piece.x,piece.y,piece.w,piece.h);
        context.closePath(); 
        
    }
    
    //draw blocks
    function drawBlocks(){
        for(x=0;x<allBlocks.length;x++){
            for(i=0;i<allBlocks[x].length; i++){
                context.beginPath();
                context.fillStyle = allBlocks[x][i].color;
                context.strokeStyle = allBlocks[x][i].border;
                context.fillRect(allBlocks[x][i].x, allBlocks[x][i].y, allBlocks[x][i].w, allBlocks[x][i].h);
                context.strokeRect(allBlocks[x][i].x, allBlocks[x][i].y, allBlocks[x][i].w, allBlocks[x][i].h);
                context.closePath();
            }
        }
        if(allBlocks.length==0){
            var message = "You Win";
            context.fillStyle = "green";
            context.font = "25px Orbitron";
            context.fillText(message, (canvasWidth/2)-50, canvasHieght/2); 
            console.log(allBlocks.length)
        }
        else{} 
    }
    
    //move circle and check collision on canvas borders
    function moveCircle( c ) {

        c.x += c.moveX;
        c.y += c.moveY;
        
            
        if (c.x >= canvasWidth - (circleSize/2)){
            c.moveX *= -1;  
        }
        
        if (c.y >= canvasHieght - (circleSize/2)){
            writeLoser();
            drawExplosion();
            c.moveX *= 0;
            c.moveY *= 0; 
            playing=false;
    
        }
        
        if (c.x <= (circleSize/2)){
            c.moveX *= -1;   
        }
        
        if (c.y <= (circleSize/2)){
            c.moveY *= -1;
        }

    }
    //write loser function
    function writeLoser() {
        var message = "Loser! Refresh Page to Play Again!";
        context.fillStyle = "green";
        context.font = "25px Orbitron";
        context.fillText(message, (canvasWidth/2)-200, (canvasHieght/2)+40);

    }
    //write winner function
    function writeWinner() {
        var message = "Winner! Refresh Page to Play Again!";
        context.fillStyle = "green";
        context.font = "25px Orbitron";
        context.fillText(message, (canvasWidth/2)-250, canvasHieght/2);

    }
    
    //move paddle based on mouse
    function movePiece(mouseX, mouseY) {
        piece.x = mouseX - piece.w/2;
        if (piece.x <= 0)
            piece.x = 0;
        if (piece.x >= canvasWidth - piece.w)
            piece.x = canvasWidth - piece.w;
    } 
    
    var drawnAlready = false;
    
    //draw image of explosion over ball if it hits the bottom of the canvas
    function drawExplosion(){
        if(!drawnAlready){
        playing=false;
        var imageObj = new Image();

        imageObj.src = 'imgs/explosion.png';

        //when the image has loaded
        imageObj.onload = function() {
            
            //draw the image
            startImgX=circle.x -30;
            startImgY=circle.y -35;
            enlargeImgX=circle.size+35;
            enlargeImgY=circle.size+30;
            context.drawImage(imageObj,startImgX,startImgY,enlargeImgX,enlargeImgY);

            drawnAlready = true;
        }
        }
    }
    
    
    //check collision 
    function checkCollision() {
        var object2X = circle.x - circle.size/2;
        var object2Y = circle.y - circle.size/2;
        var object2W = circle.size;
        var object2H = circle.size;
        for(x=0;x<allBlocks.length;x++){
            for(i=0;i<allBlocks[x].length;i++){

                var object1X = allBlocks[x][i].x;
                var object1Y = allBlocks[x][i].y;
                var object1W = allBlocks[x][i].w;
                var object1H = allBlocks[x][i].h;

                //bottom side
                if (object1X + 2< object2X + object2W &&
                    object1X + object1W -2 > object2X &&
                    object1Y + object1H - 1< object2Y + object2H &&
                    object1Y + object1H > object2Y
                   ){
                    
                    allBlocks[x].splice(i,1);
                    circle.moveY *= -1;    
                    
                    
                } 
                
                //top side
                else if (object1X+2< object2X + object2W &&
                    object1X + object1W -2> object2X &&
                    object1Y < object2Y + object2H &&
                    object1Y + 2> object2Y) {
                    
                    allBlocks[x].splice(i,1);
                    circle.moveY *= -1;
                    
                }
                //left side
                else if (object1X < object2X + object2W &&
                    object1X + 2 > object2X &&
                    object1Y +2< object2Y + object2H &&
                    object1Y + object1H -2> object2Y) {
                    
                    allBlocks[x].splice(i,1);
                    circle.moveX *= -1;
                    
                } //if 
                
                //right side
                else if (object1X + object1W - 2< object2X + object2W &&
                    object1X + object1W > object2X &&
                    object1Y +2< object2Y + object2H &&
                    object1Y + object1H -2> object2Y) {
                    
                    allBlocks[x].splice(i,1);
                    circle.moveX *= -1;
                    
                } 
            }
        }
     
        var object6X = piece.x;
        var object6Y = piece.y;
        var object6W = piece.w;
        var object6H = piece.h;
        

        //left top side
        if (object6X < object2X + object2W &&
            object6X + (object6W/4)-(circleSize/2) > object2X &&
            object6Y < object2Y + object2H &&
            object6Y + 5> object2Y) {
            
            circle.moveY *= -1;
            circle.moveX = -1.2;
            
        } //if 
        //collision for center left 
        else if (object6X + (object6W/4)-(circleSize/2)+1< object2X + object2W &&
            object6X + (object6W/2)-(circleSize/2) > object2X &&
            object6Y < object2Y + object2H &&
            object6Y + 5> object2Y) {
            
            circle.moveY *= -1;
            circle.moveX = -1;
            
        } //if 
        
        //collision for right center of paddle
        else if (object6X + (object6W/2)-(circleSize/2)+1< object2X + object2W &&
            object6X + ((object6W/4)*3)-(circleSize/2) > object2X &&
            object6Y < object2Y + object2H &&
            object6Y + 5> object2Y) {
            
            circle.moveY *= -1;
            circle.moveX = 1;
            
        } //if 
        
        //collision for right of paddle
        else if (object6X + ((object6W/4)*3)-(circleSize/2)+1< object2X + object2W &&
            object6X + object6W > object2X &&
            object6Y < object2Y + object2H &&
            object6Y + 5> object2Y) {
            circle.moveY *= -1;
            circle.moveX = 1.2;
        } 
        
        //check if all blocks are gone to call winner function 
        if(allBlocks[0].length==0&&
          allBlocks[1].length==0&&
          allBlocks[2].length==0&&
          allBlocks[3].length==0){
            writeWinner();
            circle.moveX *= 0;
            circle.moveY *= 0;
        }
    }///checkCollision
    
    //function to draw circle
    function drawCircle( c ) {
              
        context.beginPath();   
        context.arc( c.x, c.y, c.size/2, 0, Math.PI * 2 );
        context.fillStyle = c.color;
        context.fill(); 			
        context.closePath(); 
   
    } //drawCircle()  
        

    

    
    // clear canvas
    function clearCanvas(canvasColor) {
        context.fillStyle = canvasColor;
        context.fillRect(0, 0, canvasWidth, canvasHieght);

    } //clearCanvas()
    
    //draw canvas
    function drawCanvas(){
        if(playing){
        clearCanvas(canvasColor);
        drawBlocks();
        drawGamePiece();
        moveCircle(circle);
        checkCollision();    
        drawCircle(circle);
        } else{
            if(!drawnAlready){
            drawExplosion();
            }
        }
    }
    
    document.addEventListener("keypress", startGame);
    drawCanvas();
    var doThis = true;
                    
    function startGame(e) {

            var y = e.keyCode;

            if (y == 13) {
                if(doThis){
                    setInterval(drawCanvas,1);
                    doThis=false;
                    }
            }
    }
    
    
    theCanvas.addEventListener("mousemove", eventMouseMove, true);

    //-----------------------------------------------------------
    //mouse coordinates event handler that also moves the box
    function eventMouseMove(e) {

        //move the box based on the mouse X and Y
        movePiece(e.offsetX, e.offsetY);

    } //eventMouseMove()
} // canvasApp()
 
