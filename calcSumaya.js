function calcVolume(){
  console.log("Hi Sumaya!!")
  r = radius.value  // read weight from element with id="weight"
  h = height.value  // read height from element with id="height"
  console.log("r="+r)
  console.log("h="+h)
  v= Math.PI*r*r*h // calculate the Body Mass Index
  console.log("v is "+v)
  Volume.innerHTML =    // write into label element with id "BMI"
      "Your Volume is "
      +v.toFixed(1)  // round BMI to 1 decimal place
}
