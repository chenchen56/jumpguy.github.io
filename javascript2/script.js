var character = document.getElementById("character");
var block = document.getElementById("block");
var i=0;






function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}





var dead = setInterval(function(){
    var ct = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var bl = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(bl<20 && bl>-6 && ct>=200){
        block.classList.remove("block") ;
        alert("you lost");
    }
},10);

var a = document.getElementById("a")
var btn = document.getElementById("btn")
var btna = document.getElementById("btna")
btn.addEventListener("mouseover",function(){
    this.src = "7.jpg";
})
btn.addEventListener("mouseout",function(){
    this.src = "6.jpg";
})
btn.addEventListener("click",function(){
    block.classList.add("block") ;

})
btna.addEventListener("mouseover",function(){
    this.src = "9.jpg";
})
btna.addEventListener("mouseout",function(){
    this.src = "8.jpg";
})