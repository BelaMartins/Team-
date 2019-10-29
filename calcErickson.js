function calcFinalAmount(){
  d = dollars.value  // read weight from element with id="dollars"
  i = interest.value  // read height from element with id="percentage"
  finalamount = (d*i) + d  // calculate the Interest
  FinalAmount.innerHTML =    // write into label element with id ""
      "Your Final Amount is "
      +finalamount.toFixed(1)  // round BMI to 1 decimal place
}
