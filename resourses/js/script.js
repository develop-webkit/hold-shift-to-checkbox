"use strict;"

const inputs = document.querySelectorAll('.inbox input[type="checkbox"]');
const uncheck = document.querySelector(".check")
let lastCheck;
let inBetween = false;

function displayChange(e){
    console.log(e);
    if(e.altKey){
        for(const input of inputs){
            if(input === this || input === lastCheck){
                inBetween = !inBetween;
            }
            if(inBetween){
                input.checked = true;
            }
        }
    }
    lastCheck = this;
}

for(const input of inputs){
    input.addEventListener('click',displayChange);
}

uncheck.addEventListener('click',() => {
    for(const input of inputs){
        input.checked = false;
    }
});