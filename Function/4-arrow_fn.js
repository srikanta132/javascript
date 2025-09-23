// Way - 1
let play = x => x;
console.log(play(5))

//Way - 2
let sum = (a,b)=>{
    return (a+b)
}
console.log(sum(5,6))

// Using Arrow Function
let doing = (check)=>{
    if(check)
        return (n=1)=>{ // here n=1 is default value in case argument is undefined this will go 
            console.log(n)
    }
    else 
    return ()=>{
        console.log("lol")
    }
}

let doer = doing(true)
console.log(doer(5))
