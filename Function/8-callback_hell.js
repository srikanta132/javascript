function text(text,delay,func){
    setTimeout(()=>{
        try{
            func()
        }catch(e){
            console.log("function is not there")
        }
        console.log(text)
    },delay)
}

text("Hii",1000,()=>{
    text("Hello",1000,function(){
        text("Hey",1000);
    })
})

