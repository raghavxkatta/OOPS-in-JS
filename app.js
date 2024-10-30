// /* FACTORY FUNCTION is basically one of the ways of making objects based off of a pattern or a recipe, in this code we've defined a recipe for a color. We call make color, we pass in three numbers and we get back an object and that object contains bunch of multiple things. It contains three properties that are numbers r,g,b and then two methods hex and rgb  */
// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)/* this function converts colours written in hexadecimal into their rgb values */
// }
// // /* Constructor function-to create a color object */
// function makeColor(r, g, b) {
//     const color = {}/* this function makes us an object,it starts empty, but then we add some properties based off of arguments that we were provided then we add some methods and then we return that object and this is called a FACTORY FUNCTION  */
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`
//     }
//     color.hex = function hex(r, g, b) {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))/* this function converts colours written in hexadecimal into their rgb values */
//     }
//     return color
// }

// function Color() {
//     const o = {}/* Creates a blank plain JS object */
//     this.r = r/* Links (sets the con  structor of) this object to another object*/
//     this.g = g/* Passes the newly created object from Step-1 as the this context */
//     this.b = b/* Returns this if the function doesn't return it's own object */

//     return o
// }
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
// }
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return (
//         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))/* this function converts colours written in hexadecimal into their rgb values */
// }
// Color.prototype.rgba = function (a = 1.0) {/* giving default opacity of 1.0 */
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`
// }

// const color1 = new Color(40, 255, 60)
// const color2 = new Color(0, 0, 0)




// class Color {
//     constructor(r, g, b, name) {/* constructor is a function which is executed immediately whenver a function is created */
//         /* and it automatically runs as long as the name is constructor */
//         this.r = r/* these are going to be added as properties on this color object that we get returned */
//         this.g = g
//         this.b = b
//         this.name = name
//     }
//     innerRGB(){
//          const { r, g, b } = this
//         return `rgb(${r},${g},${b})`
//     }
//     rgb() {
//     return `rgb(${this.innerRGB()})`
//     }
// rgba(a=1.0){
//     return`rgba(${this.innerRGB()},${a})`
// }
//     hex() {
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }
//     const c1 = new Color(255, 67, 89, 'tomato')/* so you don't need to make an empty object the new keyword takes care of it c*/

class Pet {
    constructor(name, age) {
        console.log('IN PET CONSTRUCTOR')
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('In Cat Constructor')
        super(name, age)/* Super keyword basically references to the parent class for the properties and therefore reduces the amount of code that we would have to write without it */
        this.livesLeft = this.livesLeft
    }
    meow() {
        return 'meoww!!!'
    }
}



class Dog extends Pet {
    bark() {
        return 'WOOF!!!'
    }
    eat() {
        return `${this.name} scarfs his food`/* this would get more priority in comparison to the parent class eat() */
    }
}
