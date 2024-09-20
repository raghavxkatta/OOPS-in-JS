String.prototype.yell=function(){
    return `OMG!!! ${this.toUpperCase()}!!!!Arghhhhhh!`
}
Array.prototype.pop= function(){
    return `Sorry I want that element I will never pop it off` /* here we have replaced the original pop method with our own pop method */
}