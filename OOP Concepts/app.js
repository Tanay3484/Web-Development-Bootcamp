/*
Following using Factory Functions

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function() {
        const {r,g,b} = this;
        return (
            '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
        );
    };
    return color;
}

const firstColor = makeColor(35,255,150);
console.log(firstColor.hex());
console.log(firstColor.rgb());
*/

//Using Constructor Functions
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function(){
    const {r,g,b} = this;
    return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
};

const color1 = new Color(40,50,60);
console.log(color1.hex());
// document.body.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`;
// document.body.innerHTML = `rgb(${color.r},${color.g},${color.b})`;
// document.body.style.fontFamily = "monospace";
// document.body.style.display  = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.fontSize = "3em";