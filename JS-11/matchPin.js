// Todo 1: Generate Pin-done
// Todo 2: Make keypad active- Done
// ToDo 3: Make Notification work- Done
// Todo 4: Make try left work
// ToDo 5: Make c (clear) btn work to clear keyPad input- Done
// ToDo 6: Remove Element (<) one after another

// Selector

const generatedInputPin = document.querySelector(".generatedPin");
const generatePinBtn = document.querySelector(".generate-btn");
const showKeyPadValue = document.querySelector(".showValue");
const submitBtn = document.querySelector(".submit-btn");
const notifySection = document.querySelector(".notify-section");
const wrongNotification = document.querySelector(".wrong-pin");
const correctNotification = document.querySelector(".correct-pin");
let tryValue = document.getElementById("tryLeft");
const removeBtn = document.getElementById("removeBtn");
//console.log(generatePinBtn);

// Generated 4 Digit Pin
function generatedPin(){
    const randomNumber = Math.floor(Math.random()*9000 + 1000);
    generatedInputPin.value = randomNumber;

}

generatePinBtn.addEventListener("click", generatedPin);

// Make KeyPad function

function inputValue(number){
    if (generatedInputPin.value == ""){
        alert("Please Generate Pin First");
    } else {
        showKeyPadValue.value += number;
    }

    // impiment clear functioin

    if(number=="C"){
    clearKeyPadInput();
    }
}

//clear all keyPad input

function clearKeyPadInput(){
    showKeyPadValue.value = "";
}

// Hide the notify Section

function removeDefaultNotification(){
    notifySection.style.display="none";
}
removeDefaultNotification();

// check pin match 

function checkPin(){
    const newPin = generatedInputPin.value;
    //console.log(newPin);
    if(newPin===showKeyPadValue.value){
        showCorrectNotification();
    }  else {
        showWrongNotification();
        tryLeft();
    }
}

submitBtn.addEventListener("click", checkPin);

// show correct notification & make button geen and setting disable=true

function showCorrectNotification(){
    notifySection.style.display="block";
    correctNotification.style.display="block";
    submitBtn.style.backgroundColor="green";
    submitBtn.disabled=true;
    generatePinBtn.style.backgroundColor="green";
    generatePinBtn.disabled=true;
    wrongNotification.style.display="none";
}

//show wrong notification

function showWrongNotification(){
    notifySection.style.display="block";
    correctNotification.style.display="none";
    wrongNotification.style.display="block";
}

// Make try Left Work

let chance=parseInt(tryValue.innerText);
function tryLeft(){
    
    //console.log(tryValue.innerText);
    if (chance>0){
        chance=chance-1;
    }

    tryValue.innerText=chance;

    // Make Button red and setting disabled = true

    if(chance==0){
        submitBtn.disabled=true;
        submitBtn.style.backgroundColor="red";
        generatePinBtn.disabled=true;
        generatePinBtn.style.backgroundColor="red";
    }
}

// Removing single item from keyPad

function removeSingleElement(){
    if(showKeyPadValue !==""){
        let currentValue = showKeyPadValue.value;

        // removing the last character from the currentValue string
        showKeyPadValue.value=currentValue.slice(0,-1);
    }
}

removeBtn.addEventListener("click", removeSingleElement);

