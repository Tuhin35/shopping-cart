
function updateCaseNumber(increase){
    const caseNumberField = document.getElementById('case-number-field');
const caseNumberString = caseNumberField.value;
const previousCaseNumber = parseInt(caseNumberString);


 let newCaseNumber;

 if (increase === true ) {
    newCaseNumber = previousCaseNumber +1;
 }
else{
    newCaseNumber = previousCaseNumber - 1;
}

 caseNumberField.value = newCaseNumber;
 return newCaseNumber;
}



function updateTotalNumber(newCaseNumber){
 const caseTotalPrice = newCaseNumber * 59;
const caseTotalElement = document.getElementById('case-total');
caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){


// console.log("hello");
const newCaseNumber =  updateCaseNumber(true);
 
updateTotalNumber(newCaseNumber);
calculateSubtotal();
    


})
document.getElementById('btn-case-minus').addEventListener('click',function(){


    // console.log("hello");
    
    const newCaseNumber =  updateCaseNumber(false);
    updateTotalNumber(newCaseNumber);
    calculateSubtotal();
    
    })


function getTextElementById(element){
const phoneTotalElement = document.getElementById(element);
const currentPhoneTotalString = phoneTotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString);
return currentPhoneTotal ;






}











// mobail phone part start


function updatePhoneNumber(increases){
    const phoneNumberField = document.getElementById('phone-number-field');
const phoneNumberString = phoneNumberField.value;
const previousPhoneNumber = parseInt(phoneNumberString);


 let newPhoneNumber;

 if (increases === true ) {
    newPhoneNumber = previousPhoneNumber +1;
 }
else{
    newPhoneNumber = previousPhoneNumber - 1;
}



 phoneNumberField.value = newPhoneNumber;
 return newPhoneNumber;
}

function setTextElementvalueByid(element,value){
const subTotalElement = document.getElementById(element);
subTotalElement.innerText = value;

}






function calculateSubtotal(){


    const currentPhoneTotal = getTextElementById('phone-total');
    
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementvalueByid('sub-total',currentSubTotal)
   const taxAmount = currentSubTotal * 0.1;
   setTextElementvalueByid('tax-total',taxAmount);
   const finalTotal = currentSubTotal + taxAmount;
   setTextElementvalueByid('final-total',finalTotal);

}

function updateTotalPhoneNumber(calculatePhone){
    const phoneTotalPrice = calculatePhone * 1219;
   const phoneTotalElement = document.getElementById('phone-total');
   phoneTotalElement.innerText = phoneTotalPrice;
   }

document.getElementById('btn-phone-plus').addEventListener('click',function(){


    // console.log("hello");
    const newPhoneNumber =  updatePhoneNumber(true);
     
    updateTotalPhoneNumber(newPhoneNumber);
    calculateSubtotal();
    
    
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){


    // console.log("hello");
    
    const newPhoneNumber = updatePhoneNumber(false);
    updateTotalPhoneNumber(newPhoneNumber);
    calculateSubtotal();
    
    
    
    })




