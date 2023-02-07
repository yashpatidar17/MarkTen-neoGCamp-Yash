const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#givenCash");
const checkButton = document.querySelector("#checkButton");
const errorMessage = document.querySelector("#ErrorMessage")
const noOfNotes = document.querySelectorAll(".noOfNotes");
//var Yash = document.querySelector(".yash");
// console.log(Yash.value);
console.log(cashGiven.value);
console.log(billAmount.value);
// console.log("hello")
const avaNotes = [2000,500,100,20,10,5,1];
checkButton.addEventListener("click",validateAmount);

function validateAmount(){
    errorMessage.style.display = "none";
    if(billAmount.value>0){
        if(cashGiven.value > billAmount.value){
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToReturn);
        }else{
            errorMessage.style.display = "block";
        errorMessage.innerText = "The cash amount should be greator than bill amount";
        }

    }else{
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please enter bill amount greator than 0";
    }

    function calculateChange(amountToReturn){
        for(let i=0;i<avaNotes.length;i++){
            const numberOfNotes = Math.trunc(amountToReturn/avaNotes[i]);
            amountToReturn %= avaNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
        };
    }
}