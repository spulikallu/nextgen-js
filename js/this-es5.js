function abc() {}

function submitButton() {
  console.log(this, "this on markup");
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#submitBtn")
    .addEventListener("click", function (event) {
      console.log(this, "this on js");
    });
});

/*
var button = document.getElementById('submitBtn');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
*/
var button = document.getElementById('submitBtn');
button.addEventListener('click', function(){
  this.classList.toggle('on');
});


var obj = {
  display: function(){
    console.log(this, "this inside a function wrapped with object");
  }
}

//obj.display();


let me = {
  namer: "Ashutosh Verma",
  thisInArrow:() => {
  console.log(this.namer); // no 'this' binding here
  },
  thisInRegular: function(){
  console.log(this.namer); // 'this' binding works here
  }
 };
 //me.thisInArrow();
 //me.thisInRegular();



partentFunction = () => {
  console.log(this);
 output = () =>{
  console.log(this);
}
output();
}

//partentFunction();


function partentFunctions () {
  console.log(this);
  function outputs() {
  console.log(this);
    function inputs(){
      console.log(this)
    }
  inputs();
}
outputs();
}

//console.log(partentFunctions());
//https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/
//https://stackoverflow.com/questions/9644044/javascript-this-pointer-within-nested-function

var em = {
  name: "sandeep",
  partentFunctions : function  () {
    console.log(this);
    var self = this;

    function outputs() {
    console.log(this);
      function inputs(){
        console.log(this)
      }
    inputs();
  }
  outputs.call(self);
  }

}

//em.partentFunctions();



/*
In JavaScript the this object is really based on how you make your function calls.

In general there are three ways to setup the this object:

someThing.someFunction(arg1, arg2, argN)
someFunction.call(someThing, arg1, arg2, argN)
someFunction.apply(someThing, [arg1, arg2, argN])
In all of the above examples the this object will be someThing. Calling a function without a leading parent object will generally get you the global object which in most browsers means the window object.


*/

class TestObj {
  display(){
    console.log(this);
  }
}


var abc = new TestObj();
//abc.display();



class TestObj2 {
  name = "sandeep";

  display = () => {
    console.log(this);
    console.log(this.name);

  };

  many (){
    var check = () =>{
      console.log(this);
    }
    check();
  }

}

var abc2 = new TestObj2();
abc2.many();

//https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/

//The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
