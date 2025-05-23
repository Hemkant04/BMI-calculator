const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")
const convertBtnEl= document.getElementById("convert-btn")
const resultCm=document.getElementById("cm")


function calculateBMI(){
    const heightValue= document.getElementById("height").value /100;
    const weightValue= document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue* heightValue);
   

    bmiInputEl.value= bmiValue

    if(bmiInputEl < 18.5){
        weightConditionEl.innerText="Under Weight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText="Normal weight"

    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText="Over Weight"
    }else if(bmiValue >= 30){
        weightConditionEl.innerText="Obesity"

    }
}
function converter(){
    const feetValue=document.getElementById("feet").value;
    
    const cmValue= feetValue * 30.48;

    resultCm.value=cmValue;

}


btnEl.addEventListener("click", calculateBMI)
convertBtnEl.addEventListener("click", converter)