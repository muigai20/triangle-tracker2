function discover(){
var side1=parseInt(document.getElementById('side1').value);
var side2=parseInt(document.getElementById('side2').value);
var side3=parseInt(document.getElementById('side3').value);
var display=document.getElementById('display');
if(side1<=0&&side2<=0&&side3<=0){
  display.textContent='This value do not make up a triangle'
}else if(side1==side2&&side1==side3&&side2==side3){
  display.textContent='This is an Equilateral Triangle : All sides are equal'
}
  }
}function refresh(){
  var side1=parseInt(document.getElementById('side1').value);
  var side2=parseInt(document.getElementById('side2').value);
  var side3=parseInt(document.getElementById('side3').value);
  var display=document.getElementById('display');
}
}
