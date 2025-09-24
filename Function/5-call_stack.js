let one = ()=>{
    return 1;
};

let two = ()=>{
    return one()+one()
};

let three = ()=>{
    return two()+one()
}

console.log(three())