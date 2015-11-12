
//BOX GAME//
var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

var box = {
    xPos: 225,
    yPos: 5,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: true,
    move: function(){
        console.log(box.goLeft);
        if(box.goLeft && box.xPos>5){
            box.xPos = box.xPos - 5;    
        }
        if(box.goRight && box.xPos<475){
            box.xPos += 5;    
        }
        if(box.goUp && box.yPos>5){
            box.yPos -= 5;    
        }
        if(box.goDown && box.yPos<475){
            box.yPos += 5;    
        }
        console.log(box.xPos);
    },
    draw: function(){
        ctx.rect(box.xPos,box.yPos,20,20);
        ctx.stroke();
    }
}

document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = true;
    }
    if(evt.keyCode === 38){
        box.goUp = true;
    }
    if(evt.keyCode === 39){
        box.goRight = true;
    }
    if(evt.keyCode === 40){
        box.goDown = true;        
    }    
    
});

document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = false;
    }
    if(evt.keyCode === 38){
        box.goUp = false;
    }
    if(evt.keyCode === 39){
        box.goRight = false;
    }
    if(evt.keyCode === 40){
        box.goDown = false;        
    }    
});

function gameLoop(){
    ctx.beginPath();
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    box.move();
    box.draw();
    window.requestAnimationFrame(gameLoop);
}
gameLoop(); 

//image//
var img = new Image(https://cdn-insomniac.s3.amazonaws.com/emoji_sexface.png);
img.onload = function() {
    startGame();
};
img.src = url;


for(var i ; i < 100; i++)
{
    if(box.yPos == 0)
    {
        box.yPos = 400;
        gameLoop();
    }

}


//object constructor (code hs) ; made one 