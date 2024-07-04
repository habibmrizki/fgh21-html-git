function checkSignUp(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;
  const terms = event.target.terms.checked;
  if (password !== confirmPassword) {
    window.alert("Password not same");
  } else if (terms == false) {
    window.alert("You forgot check the terms");
  } else {
    window.alert(`Your account register , welcome ${name}`);
  }
}
