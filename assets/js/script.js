function toggle() {
var psw = document.getElementById("password").value;
var cpsw = document.getElementById("confirmPassword").value;

  if (psw != cpsw){
    document.getElementById("password").style.borderColor= "red";
    document.getElementById("confirmPassword").style.borderColor= "red";
  }
  else {
    document.getElementById("password").style.borderColor= "green";
    document.getElementById("confirmPassword").style.borderColor= "green";
  }
}
