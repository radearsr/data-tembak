const btnSubmit = document.querySelector(".btn-submit");
const btnWait = document.querySelector(".btn-wait");

const alertSuccess = document.querySelector(".alert.success");
const alertDanger = document.querySelector(".alert.danger");

const tokoInput = document.querySelector("#toko");
const akunInput = document.querySelector("#akunTT");
const priceInput = document.querySelector("#price");

tokoInput.addEventListener("input", function () {
  if (tokoInput.value == "Tiktok") {
    akunInput.classList.remove("d-none");
  } else if (tokoInput.value == "JDID") {
    priceInput.classList.remove("d-none");
  } else {
    akunInput.classList.add("d-none");
  }
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzVwhiWuwnRa9q8KH3RNnB2AQsVRi2tvDDynygZy4arFKw4S3Petn5lmVwKtG6AfQPO/exec";
const form = document.forms["submit-to-google-sheet"];

const btnFunc = () => {
  btnSubmit.classList.toggle("d-none");
  btnWait.classList.toggle("d-none");
};

form.addEventListener("submit", (e) => {
  btnFunc();
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      alertSuccess.classList.toggle("active");
      form.reset();
      setTimeout(function () {
        alertSuccess.classList.toggle("active");
      }, 2000);
      btnFunc();
    })
    .catch(() => {
      alertDanger.classList.toggle("active");
      setTimeout(function () {
        alertDanger.classList.toggle("active");
      }, 2000);
      btnFunc();
    });
});
