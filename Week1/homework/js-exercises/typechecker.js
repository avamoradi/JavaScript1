let a = 12;
let b = "12";

check(a, b);

function check(a,b) {
  if (a === b) {
    console.log("the type of two variable is the same");
  } else {
    console.log("the type of two variable IS NOT the same")
  }
}