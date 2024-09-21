/* FACTORY FUNCTION is basically one of the ways of making objects based off of a pattern or a recipe, in this code we've defined a recipe for a color. We call make color, we pass in three numbers and we get back an object and that object contains bunch of multiple things. It contains three properties that are numbers r,g,b and then two methods hex and rgb  */
// function hex(r,g,b){
//     return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)/* this function converts colours written in hexadecimal into their rgb values */
// }
// /* function to create a color object */
// function makeColor(r,g,b){
//     const color={}/* this function makes us an object,it starts empty, but then we add some properties based off of arguments that we were provided then we add some methods and then we return that object and this is called a FACTORY FUNCTION  */
// color.r =r 
// color.g= g
// color.b = b
// color.rgb= function(){
//     const { r, g, b } = this;   
// return `rgb(${r},${g},${b})`
// }
// color.hex= function hex(r,g,b){
//     const { r, g, b } = this; 
//     return(
//          '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1))/* this function converts colours written in hexadecimal into their rgb values */
// }
// return color
// }

function Color(){
    const o={}/* Creates a blank plain JS object */
    this.r=r/* Links (sets the constructor of) this object to another object*/
    this.g=g/* Passes the newly created object from Step-1 as the this context */
    this.b=b/* Returns this if the function doesn't return it's own object */
    
    return o
}
Color.prototype.rgb=function(){
    const { r, g, b } = this;   
return `rgb(${r},${g},${b})`
}
Color.prototype.hex=function(){
    const { r, g, b } = this; 
    return(
         '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1))/* this function converts colours written in hexadecimal into their rgb values */
}
Color.prototype.rgba=function(a=1.0){/* giving default opacity of 1.0 */
    const { r, g, b } = this; 
return `rgba(${r},${g},${b},${a})`
}

const color1= new Color(40,255,60)
const color2= new Color(0,0,0)
