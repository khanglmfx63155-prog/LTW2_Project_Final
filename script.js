function showDangKy() {
  document.getElementById("divdangnhap").style.display = "none";
  document.getElementById("divdangky").style.display = "block";
}

function showDangNhap() {
  document.getElementById("divdangky").style.display = "none";
  document.getElementById("divdangnhap").style.display = "block";
}

const inputPass = document.querySelector("#pass");
const checkboxShow = document.querySelector("#show");

checkboxShow.addEventListener("change", function () {
  inputPass.type = this.checked ? "text" : "password";
});

// function showMatKhau() {
//   document.querySelector("#show").onclick = function () {
//     let inputPass = document.querySelector("#pass");
//     let checkboxShow = document.getElementById("show");
//     if (checkboxShow.checked && inputPass.type == "password") {
//       inputPass.type = "text";
//     } else {
//       inputPass.type = "password";
//     }
//   };
// }
const btn = document.getElementById("Submit");

function checkLogIn(e) {
  e.preventDefault();
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if (user === "" || pass === "") {
    alert("Vui lòng nhập đầy đủ Username và Password!");
  } else {
    alert("Đăng nhập thành công!");
    window.location.href = "gioithieubanthan.html";
  }
}

btn.addEventListener("click", checkLogIn);
