var arr = [];
function SignUp() {
  var userInp = document.getElementById("userInp").value;
  var emailInp = document.getElementById("emailInp").value;
  var inpPass = document.getElementById("inpPass").value;
  var CPass = document.getElementById("inpCpass").value;
  var r1 = document.getElementById("r1");
  var r2 = document.getElementById("r2");
  var gender = r1.checked ? r1.value : (r2.checked ? r2.value : "");
  var citySelect = document.getElementById("City");
  var selectedCity = citySelect.options[citySelect.selectedIndex].value;
  var regax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,16}$/;
  if (userInp != "" && emailInp != "" && inpPass != "" && CPass != "") {
    if (5 < userInp.length && userInp.length < 10 && regax.test(inpPass) && inpPass === CPass) {
      let obj = {
        user: userInp,
        email: emailInp,
        pass: inpPass,
        Cpass: CPass,
        gender: gender,
        city: selectedCity,
      };
      arr.push(obj);
      alert("Sign Up successfully!");
      console.log(arr);
    } else {
      alert("The password must be more than 8 characters , special character,confirm pass must match with the password , User name must be between 5 and 10 characters.");
    }
  } else {
    alert("Please fill out all the data!");
  }
}
