function hex(r,g,b){
    return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)/* this function converts colours written in hexadecimal into their rgb values */
}
/* function to create a color object */
function makeColor(r,g,b){
    const color={}/* this function makes us an object,it starts empty, but then we add some properties based off of arguments that we were provided then we add some methods and then we return that object and this is called a FACTORY FUNCTION  */
color.r =r 
color.g= g
color.b = b
color.rgb= function(){
    const { r, g, b } = this;   
return `rgb(${r},${g},${b})`
}
color.hex= function hex(r,g,b){
    const { r, g, b } = this; 
    return(
         '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1))/* this function converts colours written in hexadecimal into their rgb values */
}
return color
}


const firstColor= makeColor(35,255,150)
firstColor.hex() 
