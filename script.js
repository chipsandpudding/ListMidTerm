var wrap = document.body.querySelector(".wrap");

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("h2");
  var age = document.createElement("div");
  
  if(list[i].age > 25){
    age.style.color = "green";
  }else{}
  
  ele.innerHTML = "NAME: " + list[i].name;
  age.innerHTML = "AGE: " + list[i].age;
  
  wrap.appendChild(ele);
  wrap.appendChild(age);
  
}

var nbr = 5;
var nbrOutput = document.createElement("div");
var counter = document.createElement("button");


counter.innerHTML = "Click Me";
counter.addEventListener("click",function(){clicked()})
counter.onclick = "clicked()";
wrap.appendChild(counter);

nbrOutput.innerHTML = nbr;
wrap.appendChild(nbrOutput);

function clicked(){
nbr = nbr + 1; 
nbrOutput.innerHTML = nbr;
wrap.appendChild(nbrOutput);
}
