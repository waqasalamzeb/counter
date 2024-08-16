
let incre=document.getElementById("incre")
let decre=document.getElementById("decre")
let screen=document.getElementById("screen")
let reset =document.getElementById("reset")
incre.addEventListener("click",()=>{
    screen.innerHTML++
    console.log(typeof(screen))
    
})

decre.addEventListener("click",()=>{
    if(screen.innerHTML<=0){
        screen.innerHTML=0

    }
    else{

        screen.innerHTML--
        
    }
    
})

reset.addEventListener("click",()=>{
    // console.log(dabba.innerHTML++)
    screen.innerHTML=0
    
})




    
