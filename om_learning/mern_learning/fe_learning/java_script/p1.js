// program to illustrate the use and meaning of var, let and const keyword

var num = 15;

function findSumCountTimes(m, n, count) {
  var sum = 0;
  for (var i = 0; i <= count; i++) {
    sum = sum + m + n;
  }
  console.log("i= ", i);
  return sum;
}

function findProductCountTimes(m, n, count) {
  var product = 1;
  for (var i = 1; i <= num; i++) {
    product = product * n;
  }
  console.log("i= ", i);
  return product;
}

function myFunction(n) {
  {
    const num = 50;
  }
  sum = num + n;
  console.log("Sum = ", sum);
}

function userFunction() {
  console.log("Sum count times = ", findSumCountTimes(3, 5, 4));
  resultNum = findProductCountTimes(4);
  console.log("Result Num = ", resultNum);
  myFunction(10);
}

userFunction();
try {
  let i = 1;
  for (const j = 3; i <= 5; i++) {
    console.log(i + " " + j);
  }
  console.log("j =" + j);
} catch (ReferenceError) {
  console.log("You Tried to utilize a variablee which is out of scope");
}
