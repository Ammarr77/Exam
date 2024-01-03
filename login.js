var names = ["mohamed", "youssef"];
var passes = ["0100P", "1500O"];

function login() {
  var inpUser = document.getElementById("inpUser").value;
  var inpName = document.getElementById("inpPass").value;
  console.log(inpUser, inpName);
  var userCheck = names.indexOf(inpUser);
  var PassCheck = passes.indexOf(inpName);
  if (userCheck !== -1 && PassCheck !== -1) {
    alert("login successfully!");
  } else {
    alert("Not a user!!??");
  }
}