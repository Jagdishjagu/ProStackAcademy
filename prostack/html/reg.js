function validateForm() {
  let x = document.getElementById(uName).innerHTML;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
