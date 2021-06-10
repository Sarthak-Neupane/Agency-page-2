let text = document.querySelector(".header-welcome")
let strText = text.textContent
let splitText = strText.split("")
text.textContent = ""

const closing = document.querySelector(".clos")
const howSect = document.querySelector(".how-to-section") 

const mainSect = document.querySelector(".section-for-home") 
const howToPlay = document.querySelector(".how-to-play")

howToPlay.addEventListener("click", ()=>{
    howSect.style.width = 50 + "%"
    howSect.style.visibility = "visible"
    mainSect.style.opacity = 0.3
})

closing.addEventListener("click" , ()=>{
    howSect.style.width = 0 + "%"
    howSect.style.visibility = "hidden"
    mainSect.style.opacity = 1
})

for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50)

function onTick(){
    let butOn = document.querySelector(".buttons")
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    butOn.classList.add('fade')
    
    char++
    if (char === splitText.length){
        complete()
        return
    }
}

function complete(){
    clearInterval(timer)
    timer = null
}