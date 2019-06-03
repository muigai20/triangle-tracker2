function discover(){
var side1=parseInt(document.getElementById('side1').value);
var side2=parseInt(document.getElementById('side2').value);
var side3=parseInt(document.getElementById('side3').value);
var display=document.getElementById('display');
if(side1+side2>side3 && side2+side3>side1 && side1+side3>side2){
   if (side1==side2&&side1==side3) {
    display.textContent=' This is an Equilateral Triangle: All sides are equal!';
  }
  else if(side1===side2||side2===side3||side1===side3){
    display.textContent='This an Isosceles Triangle: Two sides are equal!'
  }
  else{
    display.textContent='This is a Scalene Triangle: No sides are equal!';
  }
}function refresh
  var side1=parseInt(document.getElementById('side1').value);
  var side2=parseInt(document.getElementById('side2').value);
  var side3=parseInt(document.getElementById('side3').value);
  var display=document.getElementById('display');
}
}
