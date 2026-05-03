//let x = "2+7"
//let result = eval(x)
//console.log(result)


let arr = [1000,2000,3000]
let newarr = arr.map(function(num){
    return num+(0.18*num)
})
console.log(newarr)

if (newarr>1000){
    console.log("Expensive")
}
else{
    console.log("Affordable")
}