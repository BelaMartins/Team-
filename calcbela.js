function calcVolume(){
  console.log ("Hi bela!!")
  l= lengthL.value  // read length from element with id="length"
  w=widthL.value  // read width from element with id="width"
  h=heightL.value // read height from element with id="height"
  console.log("l="+l)
  console.log("w="+w)
  console.log("h="+h)
  v = l*w*h// HACK:
  console.log ("v is"+ v)

  Volume.innerHTML =
     "Your Volume is "  + v

  }
