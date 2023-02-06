const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#givenCash");
const checkButton = document.querySelector("#checkButton");
const errorMessage = document.querySelector("#ErrorMessage")

checkButton.addEventListener("click",validateAmount);

function validateAmount(){
    errorMessage.style.display = "none";
    if(billAmount>0){

    }else{
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please enter bill amount greator than 0";
    }
}