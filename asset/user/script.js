function sendEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = "habib@mail.com";

  if (emailPattern.test(emailInput)) {
    window.alert("Email is valid. Sending email..");
  } else {
    window.alert("Please enter a valid email address.");
  }
}
