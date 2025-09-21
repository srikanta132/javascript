let play = function(func,times){
    for(let i=1;i<=times;i++){
        func()
    }
}

let greet = function(){
    console.log("hello")
}
// console.log(greet())

play(greet,5)