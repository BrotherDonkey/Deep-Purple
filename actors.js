'use strict';
const Vector = require('./vectorConstructor').Vector;


//Creating Lava
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


// Creating Coin

function Coin(pos){
    this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
    this.size = new Vector(0.6, 0.6);
    this.wobble = Math.random() * Math.PI * 2;
}

Coin.prototype.type = "coin";





//exports
module.exports.Lava = Lava;
module.exports.Coin = Coin;