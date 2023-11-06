var x ;
function exampleVar() {
    
    console.log(x)
    if (true) {
      x = 10;
    }
    console.log(x); // Outputs 10
  }
  
  exampleVar();
  console.log(x); // Outputs 10 (global scope)
  