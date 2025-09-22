let check = function(request){
    if(request == "odd"){
        return function(n){
            console.log((n%2!==0))
        }
    }else if (request == "even"){
        return function(){
            console.log(n%2==0)
        }
    }
    else{
        console.log("wrong request")
    }
}

let checker = check("odd")
checker(5)