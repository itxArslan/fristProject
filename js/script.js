const submit = () => {
  let fullName = document.getElementById("name").value;
  testName = Number(fullName);
  let email = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  if (testName == 0 || testName == Number(testName)) {
    showNameToast();
    return;
  }

  if (email !== "admin@user.com" || pass !== "123456") {
    showEmailToast();
    return;
  }

  sessionStorage.setItem("fullName", fullName);

  window.location.href = "./home.html";
};
// Show Tosat on Email/Password
function showEmailToast() {
  Toastify({
    text: " Please! Enter The Correctly Email/Password",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #808080, #000000)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
// Show Tosat on Name
function showNameToast() {
  Toastify({
    text: " Please! Enter The Correctly Name",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #808080, #000000)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
