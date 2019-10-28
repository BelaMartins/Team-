function calcFinalAmount(){
  D = Dollars.value  // read weight from element with id="dollars"
  I = Interest.value  // read height from element with id="percentage"
  finalamount = (D*I) + D  // calculate the Interest
  FinalAmount.innerHTML =    // write into label element with id ""
      "Your Final Amount is "
      +FinalAmount.toFixed(1)  // round BMI to 1 decimal place
}
