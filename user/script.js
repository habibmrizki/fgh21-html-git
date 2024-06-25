document.getElementById("sendButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  if (email) {
    console.log(`Email sent to: ${email}`);
    alert(`Email sent to: ${email}`);
  } else {
    alert("Please enter an email address.");
  }
});
