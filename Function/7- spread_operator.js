let str = ["are","you"]
let text = ["How",...str]
console.log(text)


console.log("---------------------------------------")
let sum = (a,b,c)=>{
    return (a+b+c)
}
let item = [2,4,6]
console.log(sum(...item))


console.log("---------------------------------------")

function bigSum(a,b,c,d){
    return (a+b+c+d)
}
let first = [5,6]
let second = [7,8]
console.log(bigSum(...first,...second))
