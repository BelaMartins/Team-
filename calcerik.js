function calcBMI(){

  w = weight.value  // read weight from element with id="weight"

  h = height.value  // read height from element with id="height"

  extra = w-h // calculate the Body Mass Index

  Extra.innerHTML =    // write into label element with id "BMI"

      "You're extra is "

      +bmi.toFixed(1)  // round BMI to 1 decimal place




}
