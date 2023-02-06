const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#givenCash");
const checkButton = document.querySelector("#checkButton");
const errorMessage = document.querySelector("#ErrorMessage")

checkButton.addEventListener("click",validateAmount);

function validateAmount(){
    errorMessage.style.display = "none";
    if(billAmount>0){
        if(cashGiven.value > billAmount.value){
            const amountToReturn = billAmount.value - cashGiven.value;
            calculateChange(amountToReturn);
        }else{
            errorMessage.style.display = "block";
        errorMessage.innerText = "The cash amount should be greator than bill amount";
        }

    }else{
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please enter bill amount greator than 0";
    }

    function calculateChange(){
        
    }
}