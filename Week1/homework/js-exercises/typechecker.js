let a = "str";
let b = "12";

let c = {
  name: 'ava',
  age: 33
}

let d = {
  country: 'Netherland',
  city: 'Amsterdam'
}

check(a, b);
check(a, c);
check(a, d);
check(b, c);
check(b, d);
check(c, d);

function check(x, y) {
  if (typeof(x) == typeof(y)) {
    console.log("same");
  } else {
    console.log("NOT the same")
  }
}