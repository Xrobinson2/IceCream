"use strict"


//input elements

const inputNumOfScoops = document.getElementById("inputNumOfScoops")
const sprinkles = document.getElementById("sprinkles")
const hotFudge = document.getElementById("hotFudge")
const whippedCream = document.getElementById("whippedCream")
const cherry = document.getElementById("cherry")
const coneRadio = document.getElementById("coneRadio")
const cupRadio = document.getElementById("cupRadio")



//button
const subOrderBtn = document.getElementById("subOrderBtn")

//output elements

const basePrice = document.getElementById("basePrice")
const tax = document.getElementById("tax")
const totalDue = document.getElementById("totalDue")



window.onload = init;

// wiring the button up
function init(){
    subOrderBtn.onclick = onSubOrderBtnClicked;

}

// declare what button does
function onSubOrderBtnClicked(){
    //checks to see if button fired
    console.log("onSubOrderBtnClicked")

    //declaring formula
  let numOfScoops = inputNumOfScoops.value;

  let optSprinkles = sprinkles.checked;
  let optHotFudge = hotFudge.checked;
  let optWhippedCream = whippedCream.checked;
  let optCherry = cherry.checked

  let radioCone = coneRadio.checked
  let radioCup = cupRadio.checked;

  // check to see if checkboxes and radios are wired
  console.log(numOfScoops)
  console.log(optSprinkles)
  console.log(optHotFudge)
  console.log(optWhippedCream)
  console.log(optCherry)
  console.log(radioCone)
  console.log(radioCup)

  //Calculate unknown values

  let iceCreamContainer = 2.25;
  let additonalScoop = 1.25;

  let optionsAmount = 0;

if(coneRadio || cupRadio ){
    iceCreamContainer = 2.25
}
else {
    iceCreamContainer = 0
}

if(numOfScoops == 0){
    iceCreamContainer = 0
}

/*if(numOfScoops < 1){
   let outputBasePrice = iceCreamContainer + additonalScoop
}
*/
let basePricePlus;

if(numOfScoops > 0 ){
    basePricePlus = iceCreamContainer + (numOfScoops * additonalScoop)
}
 //options

if(optSprinkles){
    optionsAmount += (0.50)
  
    optionsAmount += (1.25)
  }

  if(optWhippedCream){
    optionsAmount += (0.25)
  }

if(optCherry){
    optionsAmount += (0.25)
}




//Display Amount 

let outputTax = (basePricePlus + optionsAmount) * 0.04

tax.innerHTML = Number(outputTax)
totalDue.innerHTML = Number(basePricePlus + outputTax)
outputBasePrice.innerHTML = Number(basePricePlus)

console.log(totalDue)
console.log(tax)
console.log(outputBasePrice)




}


