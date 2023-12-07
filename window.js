var colision = (x,xSize,y,ySize,x2,x2Size,y2,y2Size,Type1ForColisionCheck) => {
    //X0
    //00
    if(x <= x2 && y <= y2) if(((x2 >= x && x2 <= (x + xSize)) && (y2 >= y && y2 <= (y + ySize)))) {
        return 1;
    }
    //0X
    //00
    if(x >= x2 && y <= y2) if((((x2 + x2Size) >= x && (x2 + x2Size) <= (x + xSize)) && (y2 >= y && y2 <= (y + ySize)))) {
        return 1
    }
    //00
    //X0
    if(x <= x2 && y >= y2) if(((x2 >= x && x2 <= (x + xSize)) && ((y2 + y2Size) >= y && (y2 + y2Size) <= (y + ySize)))) {
        return 1;
    }
    //00
    //0X
    if(x >= x2 && y >= y2) if((((x2 + x2Size) >= x && (x2 + x2Size) <= (x + xSize)) && ((y2 + y2Size) >= y && (y2 + y2Size) <= (y + ySize)))) {
        return 1;
    }
    if(Type1ForColisionCheck == 1) if(colision(x2,x2Size,y2,y2Size,x,xSize,y,ySize,0)) {
        return 1;
    }
    return null;
    }
    function RB(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var p = (x) => {
        return (x * x) / x;
    }
    var wake = new Audio("gag.mp3");
    var morning = () => {
        wake.play();
        setTimeout(() => {
            let w = window.open('poop.jpg','','HEIGHT=1,WIDTH=1');
            w.moveTo(RB(0,screen.width),RB(0,screen.height));
        }, 10000);
    }
    var xSpeed = 0;
    var ySpeed = 0;
    var oldY = screen.height / 2;
    var oldX = screen.width / 2;
    var speed = 0;
    var plusMIN = 0;
    var plus = plusMIN;
    var plusMAX = 20;
    var scream = [];
    var max = 100;
    alert("CLICK TO WAKE HIM UP");
    window.moveTo((screen.width / 2),(screen.height / 2));
    for(let i = 0; i < max; i++) {
        scream[i] = new Audio("gayscream.mp3");
    }
    var index = 0;
    var sound = () => {
        if(index > max) index = 0;
        index++;
        scream[index].play();
    }
    //move
    setInterval(() => {
        if(window.screenX > (screen.width - window.outerWidth * 1.1)) {
            xSpeed = 0 - xSpeed;
            oldX = window.screenX;
        oldY = window.screenY;
        sound();
        } else if(window.screenX <= 0) {
            xSpeed = 0 - xSpeed;
            oldX = window.screenX;
        oldY = window.screenY;
        sound();
        }
        if(window.screenY > (screen.height - window.outerHeight * 1.1)) {
            ySpeed = 0 - ySpeed;
            oldX = window.screenX;
        oldY = window.screenY;
        sound();
        } else if(window.screenY <= 0) {
            ySpeed = 0 - ySpeed;
            oldX = window.screenX;
        oldY = window.screenY;
        sound();
        }
        window.moveBy(xSpeed,ySpeed);
    }, 10);
    setInterval(() => {
        //speed checker
        if(oldX == window.screenX || oldY == window.screenY) {
            xSpeed = 0;
            ySpeed = 0;
            return 0;
        }
        xSpeed = (window.screenX - oldX) / 10;
        ySpeed = (window.screenY - oldY) / 10;
        oldX = window.screenX;
        oldY = window.screenY;
    },100);
    setInterval(() => {
        if(xSpeed > 0) xSpeed--;
        if(xSpeed < 0) xSpeed++;
        if(ySpeed > 0) ySpeed--;
        if(ySpeed < 0) ySpeed++;
    },1000);