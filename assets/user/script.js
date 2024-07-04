document.addEventListener("click", function () {
  const sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
      console.log("Email yang dimasukkan:", emailInput);
      alert("Link reset password telah dikirim ke email Anda.");
    } else {
      alert("Silakan masukkan email Anda.");
    }
  });
});
