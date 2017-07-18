'use strict';
// http://patorjk.com/software/taag/#p=display&f=Graffiti&t=initialize%2C%20bitch!
// var Vector = require('./vectorConstructor').Vector;
// var Player = require('./playerConstructor').Player;
// var Coin = require('./actors').Coin;
// var Lava = require('./actors').Lava;



// if (typeof module != "undefined" && module.exports)
//   module.exports = GAME_LEVELS;

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

//  _  _   __   ____  __   __   ____  __    ____  ____ 
// / )( \ / _\ (  _ \(  ) / _\ (  _ \(  )  (  __)/ ___)
// \ \/ //    \ )   / )( /    \ ) _ (/ (_/\ ) _) \___ \
//  \__/ \_/\_/(__\_)(__)\_/\_/(____/\____/(____)(____/
 
var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx                  x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          xvx           ",
   "                                                                            xx  ",
   "  xx                                      o o                                x  ",
   "  x                     o                                                    x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx       o                                                    x  ",
   "  x  @       x  x                                                xxxxx       x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                                                               xxxx!!!!!xxxx                                      ",
   "                                               x     x            xxxxxxx        xxx         xxx                  ",
   "                                               x     x                           x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                             x         x                    ",
   "                                               x     x      o  o     x   x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x   x   x               x                    ",
   "     @       x         x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

//function related variables
var actorChars = {
    "@" : Player,
    "o" : Coin,
    "=" : Lava, "|" : Lava, "v" : Lava
};

var arrowCodes = {
    37 : "left",
    38 : "up",
    39 : "right"
};

var scale = 20;
var maxStep = 0.05;
var wobbleSpeed = 8, wobbleDist = 0.07;
var playerXSpeed = 7;
var gravity = 30;
var jumpSpeed = 17;
var arrows = trackKeys(arrowCodes);



        
        //   _____          __                       
        //   /  _  \   _____/  |_  ___________  ______
        //  /  /_\  \_/ ___\   __\/  _ \_  __ \/  ___/
        // /    |    \  \___|  | (  <_> )  | \/\___ \ 
        // \____|__  /\___  >__|  \____/|__|  /____  >
        //         \/     \/                       \/
        
        


// BURNING HOT LAVA!!!
function Lava(pos, ch){
    this.pos = pos;
    this.size = new Vector(1, 1);
    
    if (ch == "="){
        this.speed = new Vector(2, 0);
    } else if (ch == "|") {
        this.speed = new Vector(0, 2);
    } else if (ch == "v") {
        this.speed = new Vector(0, 3);
        this.repeatPos = pos;
    }
}

Lava.prototype.type = "lava";


// $$$ COINS $$$

function Coin(pos){
    this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
    this.size = new Vector(0.6, 0.6);
    this.wobble = Math.random() * Math.PI * 2;
}

Coin.prototype.type = "coin";

                
                    // .__                             
        // ______ |  | _____  ___.__. ___________ 
        // \____ \|  | \__  \<   |  |/ __ \_  __ \
        // |  |_> >  |__/ __ \\___  \  ___/|  | \/
        // |   __/|____(____  / ____|\___  >__|   
        // |__|             \/\/         \/     




function Player(pos){
    this.pos = pos.plus( new Vector(0, -0.5));
    this.size = new Vector(0.8, 1.5);
    this.speed = new Vector(0, 0);
}

Player.prototype.type = "player";



// .____                      .__   
// |    |    _______  __ ____ |  |  
// |    |  _/ __ \  \/ // __ \|  |  
// |    |__\  ___/\   /\  ___/|  |__
// |_______ \___  >\_/  \___  >____/
//         \/   \/          \/      


//construct the level
function Level(plan){
    //initialize spacial variables
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];
    
    for (var y = 0; y < this.height; y++){
        var line = plan[y], gridLine = [];
        
        for (var x = 0; x < this.width; x++){
            
            var ch = line[x], fieldType = null;
            var Actor = actorChars[ch];
            
            if (Actor)
                this.actors.push(new Actor(new Vector(x, y), ch));
            else if (ch == "x") // for now x is a wall
                fieldType = "wall"; 
            else if (ch == "!") // for now ! is lava
                fieldType = "lava";
            gridLine.push(fieldType);
        }
        // console.log("actors", this.actors);
        this.grid.push(gridLine);
    }
    
    this.player = this.actors.filter(function(actor){
        return actor.type == "player";
    })[0];
    //tells us if the level is finished
    this.status = this.finishDelay = null;
}

// Methods

// Find out whether the level is finished.

Level.prototype.isFinished = function(){
    return this.status != null && this.finishDelay < 0;
};


            //     .___                    .__                
            //   __| _/___________ __  _  _|__| ____    ____  
            //  / __ |\_  __ \__  \\ \/ \/ /  |/    \  / ___\ 
            // / /_/ | |  | \// __ \\     /|  |   |  \/ /_/  >
            // \____ | |__|  (____  /\/\_/ |__|___|  /\___  / 
            //      \/            \/               \//_____/  


//ELEMENT CREATE WITH CLASS

function elt(name, className){
    var elt = document.createElement(name);
    if (className) elt.className = className;
    return elt;
}

// DISPLAY ELEMENT IN DOM

function DOMDisplay(parent, level){
    this.wrap = parent.appendChild(elt("div", "game"));
    this.level = level;
    
    this.wrap.appendChild(this.drawBackground());
    this.actorLayer = null;
    this.drawFrame();
    
    // console.log("DOMDisplay");
}

DOMDisplay.prototype.drawBackground = function(){
    var table = elt("table", "background");
    table.style.width = this.level.width * scale + "px";
    
    this.level.grid.forEach(function(row){
        var rowElt = table.appendChild(elt("tr"));
        rowElt.style.height = scale + "px";
        row.forEach(function(type){
            rowElt.appendChild(elt("td", type));
        });
    });
    return table;
};

DOMDisplay.prototype.drawActors = function(){
    var wrap = elt("div");
    this.level.actors.forEach(function(actor){
       var rect = wrap.appendChild(elt("div", "actor "+ actor.type));
       rect.style.width = actor.size.x * scale + "px";
       rect.style.height = actor.size.y * scale + "px";
       rect.style.left = actor.pos.x * scale + "px";
       rect.style.top = actor.pos.y * scale + "px";
    //   console.log("added", rect, rect.classList, rect.style);
    });
    return wrap;
};

DOMDisplay.prototype.drawFrame = function(){
    if ( this.actorLayer ) {
        this.wrap.removeChild(this.actorLayer);
    }
    
    this.actorLayer = this.wrap.appendChild(this.drawActors());
    this.wrap.className = "game " + (this.level.status || "");
    this.scrollPlayerIntoView();
};

//keep the player always in view
DOMDisplay.prototype.scrollPlayerIntoView = function() {
    // establish boundary variables, with eye to keep player in middle 1/3 at all times
    var width = this.wrap.clientWidth;
    var height = this.wrap.clientHeight;
    var margin = width / 3;

    //the viewport
    var left = this.wrap.scrollLeft, right = left + width;
    var top = this.wrap.scrollTop, bottom = top + height;
    
    var player = this.level.player;
    var center = player.pos.plus(player.size.times(0.5))
                .times(scale);
    
    if (center.x < left + margin)
        this.wrap.scrollLeft = center.x - margin;
    else if (center.x > right - margin)
        this.wrap.scrollLeft = center.x + margin - width;
    if (center.y < top + margin)
        this.wrap.scrollTop = center.y - margin;
    else if (center.y > bottom - margin)
        this.wrap.scrollTop - center.y + margin - height;
};

//clear a level
DOMDisplay.prototype.clear = function(){
    this.wrap.parentNode.removeChild(this.wrap);
};




// VECTOR CONTSTRUCTOR

function Vector(x, y) {
  this.x = x; this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.times = function(factor) {
    return new Vector(this.x * factor, this.y * factor);
};






// .__                     .__                              __  .__               
// |  |   _______  __ ____ |  |               _____   _____/  |_|__| ____   ____  
// |  | _/ __ \  \/ // __ \|  |     ______   /     \ /  _ \   __\  |/  _ \ /    \ 
// |  |_\  ___/\   /\  ___/|  |__  /_____/  |  Y Y  (  <_> )  | |  (  <_> )   |  \
// |____/\___  >\_/  \___  >____/           |__|_|  /\____/|__| |__|\____/|___|  /
//           \/          \/                       \/                           \/ 


// Verify that a particular motion / movement can be done, and the square is empty
Level.prototype.obstacleAt = function(pos, size){
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);
    
    if (xStart < 0 || xEnd > this.width || yStart < 0)
        return "wall";
    
    for (var y = yStart; y < yEnd; y++){
        for (var x = xStart; x < xEnd; x++){
            var fieldType = this.grid[y][x];
            if (fieldType) return fieldType;
        }
    }
};

Level.prototype.actorAt = function(actor){
    for (var i = 0; i < this.actors.length; i++){
        var other = this.actors[i];
        
        if (other != actor &&
            actor.pos.x + actor.size.x > other.pos.x &&
            actor.pos.x < other.pos.x + other.size.x &&
            actor.pos.y + actor.size.y > other.pos.y &&
            actor.pos.y < other.pos.y + other.size.y)
          return other;
    }
};


// .__                     .__                            .__                __          
// |  |   _______  __ ____ |  |             _____    ____ |__| _____ _____ _/  |_  ____  
// |  | _/ __ \  \/ // __ \|  |     ______  \__  \  /    \|  |/     \\__  \\   __\/ __ \ 
// |  |_\  ___/\   /\  ___/|  |__  /_____/   / __ \|   |  \  |  Y Y  \/ __ \|  | \  ___/ 
// |____/\___  >\_/  \___  >____/           (____  /___|  /__|__|_|  (____  /__|  \___  >
//           \/          \/                      \/     \/         \/     \/          \/ 



Level.prototype.animate = function(step, keys){
    if (this.status != null)
        this.finishDelay -= step;
    
    while (step > 0) {
        var thisStep = Math.min(step, maxStep);
        
        this.actors.forEach(function(actor) {
            actor.act(thisStep, this, keys);
        }, this);
        
        step -= thisStep;
    }
};

Lava.prototype.act = function(step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else
    this.speed = this.speed.times(-1);
};



Coin.prototype.act = function(step) {
    this.wobble += step * wobbleSpeed;
    var wobblePos = Math.sin(this.wobble) * wobbleDist; 
    this.pos = this.basePos.plus(new Vector(0, wobblePos));
}


Player.prototype.moveX = function(step, level, keys){
    this.speed.x = 0;
    
    if (keys.left) this.speed.x -= playerXSpeed;
    if (keys.right) this.speed.x += playerXSpeed;
    
    var motion = new Vector(this.speed.x * step, 0);
    var newPos = this.pos.plus(motion);
    var obstacle = level.obstacleAt(newPos, this.size);
    if (obstacle)
        level.playerTouched(obstacle);
    else
        this.pos = newPos;
};



Player.prototype.moveY = function(step, level, keys) {
    this.speed.y += step * gravity;
    var motion = new Vector(0, this.speed.y * step);
    var newPos = this.pos.plus(motion);
    var obstacle = level.obstacleAt(newPos, this.size);
    if (obstacle){
        level.playerTouched(obstacle);
        if (keys.up && this.speed.y > 0)
          this.speed.y = -jumpSpeed;
        else
          this.speed.y = 0;
    } else {
        this.pos = newPos;
    }
};

Player.prototype.act = function(step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);
    
    var otherActor = level.actorAt(this);
    if (otherActor)
      level.playerTouched(otherActor.type, otherActor);
      
      // Losing Animation
      if (level.status == "lost"){
          this.pos.y += step;
          this.size.y -= step;
      }
};




// .__                     .__                     .__                   __            
// |  |   _______  __ ____ |  |               ____ |  |__   ____   ____ |  | __  ______
// |  | _/ __ \  \/ // __ \|  |     ______  _/ ___\|  |  \_/ __ \_/ ___\|  |/ / /  ___/
// |  |_\  ___/\   /\  ___/|  |__  /_____/  \  \___|   Y  \  ___/\  \___|    <  \___ \ 
// |____/\___  >\_/  \___  >____/            \___  >___|  /\___  >\___  >__|_ \/____  >
//           \/          \/                      \/     \/     \/     \/     \/     \/ 


Level.prototype.playerTouched = function(type, actor) {
  if (type == "lava" && this.status == null) {
      this.status = "lost";
      this.finishDelay = 1;
  } else if (type == "coin") {
      this.actors = this.actors.filter(function(other) {
          return other != actor;
      });
      if (!this.actors.some(function(actor){
          return actor.type == "coin";
      })) {
          this.status = "won";
          this.finishDelay = 1;
      }
  }
};


//  __                            __          __                
// |  | __ ____ ___.__.   _______/  |______ _/  |_ __ __  ______
// |  |/ // __ <   |  |  /  ___/\   __\__  \\   __\  |  \/  ___/
// |    <\  ___/\___  |  \___ \  |  |  / __ \|  | |  |  /\___ \ 
// |__|_ \\___  > ____| /____  > |__| (____  /__| |____//____  >
//      \/    \/\/           \/            \/                \/ 


function trackKeys(codes) {
    var pressed = Object.create(null);
    
    function handler(event) {
        if (codes.hasOwnProperty(event.keyCode)){
            var down = event.type == "keydown";
            pressed[codes[event.keyCode]] = down;
            event.preventDefault();
            console.log(event.keyCode, "pressed");
        }
    }
    addEventListener("keydown", handler);
    addEventListener("keyup", handler);
    return pressed;
}


                     
// _______ __ __  ____  
// \_  __ \  |  \/    \ 
//  |  | \/  |  /   |  \
//  |__|  |____/|___|  /
//                   \/ 

function runAnimation(frameFunc){
    var lastTime = null;
    function frame(time){
        var stop = false;
        
        if (lastTime != null) {
            var timeStep = Math.min(time - lastTime, 100) / 1000;
            stop = frameFunc(timeStep) === false;
        }
        
        lastTime = time;
        if (!stop)
            requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
};


function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    runAnimation(function(step) {
        level.animate(step, arrows);
        display.drawFrame(step);
        if (level.isFinished()) {
            display.clear();
            if (andThen)
                andThen(level.status);
            return false;
        }
    });
}

function runGame(plans, Display){
    function startLevel(n) {
        runLevel(new Level(plans[n]), Display, function(status) {
            if (status == "lost")
              startLevel(n);
            else if (n < plans.length - 1)
              startLevel(n + 1);
            else 
              console.log("You win!");
        });
    }
    startLevel(0);
}


// .__       .__  __  .__       .__  .__                    ___.   .__  __         .__   ._.
// |__| ____ |__|/  |_|__|____  |  | |__|_______ ____       \_ |__ |__|/  |_  ____ |  |__| |
// |  |/    \|  \   __\  \__  \ |  | |  \___   // __ \       | __ \|  \   __\/ ___\|  |  \ |
// |  |   |  \  ||  | |  |/ __ \|  |_|  |/    /\  ___/       | \_\ \  ||  | \  \___|   Y  \|
// |__|___|  /__||__| |__(____  /____/__/_____ \\___  > /\   |___  /__||__|  \___  >___|  /_
//         \/                 \/              \/    \/  )/       \/              \/     \/\/



runGame(GAME_LEVELS, DOMDisplay);

