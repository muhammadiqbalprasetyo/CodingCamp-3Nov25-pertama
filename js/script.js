welcomeMessage();
function welcomeMessage() {
  let name = prompt("please enter your name:");
  if (name != null) {
    document.getElementById("welcome-speech").innerHTML =
      "Hello " + name + " ,Welcome to Mipras Company!";
  }
}
function validateForm() {
  document
    .getElementById("message-us")
    .addEventListener("submit", function (e) {
      e.preventDefault();
    });
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if ((name == "") | (email == "") | (message == "")) {
    alert("harus di isi!");
  } else if (
    alert("terima kasih " + name + " , pesanmu telah berhasil di kirim!")
  );
}
