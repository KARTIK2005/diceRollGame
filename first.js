const gate1=document.querySelector(".gate1")
const gate2=document.querySelector(".gate2")
const btn=document.querySelector(".btn")
const music = new Audio('sound.wav');
const click = new Audio('click.mp3');
let diceImages=["1.png","2.png","3.png","4.png","5.png","6.png"]
let press=0
btn.addEventListener("click",()=>{
    console.log(window.innerWidth);
    
    music.play()
    if(window.innerWidth<=800){
        gate1.style.translate="0 -100% "
        gate2.style.translate="0 100% "
    }
    else{
    gate1.style.translate="-100% 0"
    gate2.style.translate="100% 0"}
})
const btn2=document.querySelector(".submit")
const random=document.querySelector(".random")
btn2.addEventListener("click",()=>{
    click.play() 
    //btn2.style.transform="scale(1)"
    let Index = Math.floor(Math.random() * diceImages.length)
    document.querySelector(".random").src = diceImages[Index]
    random.classList.add("scale")
     setTimeout(() =>{
        random.classList.remove("scale")
     },300)
    
})
