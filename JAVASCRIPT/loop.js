console.log("Order placed")
setTimeout(function(){
    console.log("Pizza delivered")
}, 3000)

console.log("Watching tv while waiting")


function greet (name , callback){
    console.log("Hello", name)
    callback()
}
function goodbye (){
    console.log("goodbye")
}
greet("Kiyansh", goodbye)s