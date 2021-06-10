const moneyBar = document.querySelector(".moneyBar")
const modal = document.querySelector(".modal")
const moneyBarLi = document.querySelectorAll(".moneyBar li");
const score = document.querySelector('.score')
const z = document.querySelector('.scoreText')

let numQues = document.querySelector(".explain h4")



let idArray, randomNum, userHello, mainOutputArray;

mainOutputArray= ''

output = []
idArray = []
let k= 0;

let i = 0;
let a = 0;

while(i < 12){
    randomNum = Math.ceil(Math.random() * 32);
    if(idArray.includes(randomNum)){
        
    }else{
        idArray.push(randomNum)
        i++;
    }
}

console.log(idArray)

const optArray = [1, 2, 3, 4]
let shuffledArray = optArray.sort((a, b) => 0.5 - Math.random())

const nextButton = document.querySelector(".next");


let options = document.querySelector("ol");
let questionText = document.querySelector(".ques");
let answer = options.children[optArray.indexOf(1)]
let optionWrongOne = options.children[optArray.indexOf(2)]
let optionWrongTwo = options.children[optArray.indexOf(3)]
let optionWrongThree = options.children[optArray.indexOf(4)]



    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", "package.json", true)

    xhr.onload = function () {

    if (this.status == 200) {
        userHello = JSON.parse(this.responseText).Users
    }
    const output = userHello.filter(function (questions) {
        if (idArray.includes(questions.id)){
        return true; 
        }
    });

    let b= 0;
    let c= 0;

    nextButton.addEventListener("click", ()=>{

      nextButton.style.pointerEvents = "none"
      nextButton.style.visibility = "hidden"
      

        options.children[1].className = '';
        options.children[2].className = '';
        options.children[3].className = '';
        options.children[0].className = '';
        options.style.pointerEvents = "all"

        shuffledArray = optArray.sort((a, b) => 0.5 - Math.random())
        
        answer = options.children[shuffledArray.indexOf(1)]
        answer.addEventListener("click" , (e)=>{
            
            answer.className = 'correct'
            moneyBarLi[b].style.background = "green"
            options.style.pointerEvents = "none"
            nextButton.style.pointerEvents = "all"
            nextButton.style.visibility = "visible"
            
          })

        optionWrongOne = options.children[shuffledArray.indexOf(2)]
        optionWrongOne.addEventListener("click" , (e)=>{
         
            options.style.pointerEvents = "none"
            e.target.className = 'incorrect'
            answer.className = 'correct'
            moneyBarLi[b].style.background = "red"
            nextButton.style.pointerEvents = "all"
            nextButton.style.visibility = "visible"
          })

        optionWrongTwo = options.children[shuffledArray.indexOf(3)]
        optionWrongTwo.addEventListener("click" , (e)=>{
         
            options.style.pointerEvents = "none"
            e.target.className = 'incorrect'
            answer.className = 'correct'
            moneyBarLi[b].style.background = "red"
            nextButton.style.pointerEvents = "all"
            nextButton.style.visibility = "visible"
          })

        optionWrongThree = options.children[shuffledArray.indexOf(4)]
        optionWrongThree.addEventListener("click" , (e)=>{
          
            options.style.pointerEvents = "none"
            e.target.className = 'incorrect'
            answer.className = 'correct'
            moneyBarLi[b].style.background = "red"
            nextButton.style.pointerEvents = "all"
            nextButton.style.visibility = "visible"
          })

          b++
          a++
        if(a===12){
          moneyBar.style.visibility = 'hidden'
          questionText.style.visibility = 'hidden'
          questionText.parentElement.style.outline = 'none'
          options.style.visibility = 'hidden'
          numQues.style.visibility = 'hidden'

          for(d=0; d < 12; d++){
            if(moneyBarLi[d].style.background === "green"){
              c++
            }
          }

          setTimeout(()=>{
            modal.style.visibility = 'visible'

            if(c === 11){
              z.textContent = `You are a Football Genius` 
              score.textContent = `Your Score Is : ${c}`
            }else if(c > 7 && c <11 ){
              z.textContent = `Not Bad,` 
              score.textContent = `Your Score Is : ${c}`
            }else if(c > 3 && c < 7){
              z.textContent = `Poor, But not the Poorest,`
              score.textContent = ` Your Score Is : ${c}`
            }else{
              z.textContent =  `Very Poor, gain some football knowledge` 
              score.textContent = `Your Score Is : ${c}`
            }
            
          }, 500)
          
        }

        questionText.textContent = output[k].question
        answer.textContent = output[k].answer
        optionWrongOne.textContent = output[k].wrong1
        optionWrongTwo.textContent = output[k].wrong2
        optionWrongThree.textContent = output[k].wrong3
        k++

        for (let i = 0; i < 12; i++) {
            if (moneyBarLi[i].classList.contains("current")) {
              moneyBarLi[i].classList.remove("current");
              i++;
              moneyBarLi[i].classList.add("current");
              numQues.textContent = `Question ${i}`
            }
          }

         
    })
    }
  
    xhr.send()


