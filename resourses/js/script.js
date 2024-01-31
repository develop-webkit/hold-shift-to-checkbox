"use strict;"

const checkBtn = document.querySelector(".check");
const inputs = document.querySelectorAll(".inbox input");
let shiftFlag = false;
let lastCheckbox;

function checkAllBox(){
    if(this.getAttribute('data-key') > lastCheckbox && shiftFlag){
        for(const input of inputs){
            if(input.getAttribute('data-key') <= this.getAttribute('data-key') && input.getAttribute('data-key') > lastCheckbox){
                input.checked = true;
            }
        }
    }else if(this.getAttribute('data-key') < lastCheckbox && shiftFlag){
        for(const input of inputs){
            console.log(lastCheckbox,input.getAttribute('data-key'), this.getAttribute('data-key'))
            if(input.getAttribute('data-key') >= this.getAttribute('data-key') && input.getAttribute('data-key') < lastCheckbox){
                input.checked = true;
            }
        }
    }
    return;
}

function checkBox(){
    if(!shiftFlag){
        lastCheckbox = this.getAttribute("data-key");
    }
    for(const input of inputs){
        input.addEventListener('change',checkAllBox)
    }
    return;
}

for(const input of inputs){
    input.addEventListener('change',checkBox)
}

window.addEventListener('keydown',(e) => { 
    if(e.key === 'Shift'){
        shiftFlag = true;
    }else{ 
        shiftFlag = false;
    } 
    return;
});

window.addEventListener('keyup',(e) => {if(e.key === 'Shift'){shiftFlag = false;}});
checkBtn.addEventListener('click',() =>{
    for(const input of inputs){
        input.checked = false;
    }
});