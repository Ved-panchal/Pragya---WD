let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('.resetBtn')
let h1 = document.querySelector("h1")
let turnO = true 

const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8]     
]


boxes.forEach((box)=>{
    box.addEventListener('click' , function(){
        console.log("box clicked")
        if(turnO){
            box.innerText = "O" 
            turnO = false ;
        }
        else{
            box.innerText = "X"
            turnO = true 
        }
        box.disabled = true ;

        checkWinner();
    })
})


const checkWinner = ()=>{
    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        
        if(pos1val !=  "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                disableBoxes()
                console.log(pos1val + "winner")
                h1.innerHTML = `winner is ` + pos1val
                h1.style.backgroundColor = 'white' 
                
            }
        }
    }
}


const resetGame = ()=>{
    turnO = true ;
    enableBoxes()
    h1.innerText = "Tic tac toe"
    h1.style.backgroundColor = 'transparent' ;
}

function disableBoxes(){
    for(let box of boxes){
        box.disabled = true 
    }
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled = false 
        box.innerText = " "
    }
}


resetBtn.addEventListener('click' , resetGame)