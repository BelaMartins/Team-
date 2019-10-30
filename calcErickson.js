function FinalAmount(){
  d = parseFloat(dollars.value)  // read weight from element with id="dollars"
  i = parseFloat(interest.value)  // read height from element with id="percentage"
  finalamount = parseFloat((d*i) + d)  // calculate the Interest
  console.log("hellow world")
  console.log(finalamount)

  finalAmount.innerHTML =    // write into label element with id ""
      "Your Final Amount is "
      +finalamount  // round BMI to 1 decimal place
}
