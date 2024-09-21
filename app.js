function hex(r,g,b){
    return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)/* this function converts colours written in hexadecimal into their rgb values */
}
/* function to create a color object */
function makeColor(r,g,b){
    const color={}/* assigning empty object to color  */
color.r =r 
color.g= g
color.b = b
color.rgb= function(){
    console.log(this)/* we are simply printing this */

return color
}


const firstColor= makeColor(35,255,150)
firstColor.rgb()/* call the rgb to print the color object */
}