//hesab-faktura

const confirmAndSend = document.querySelector(".confirmAndSend");
const btnConfirm = document.querySelector(".btn-confirm");
const confirmAndSendSection = document.querySelector(".confirmAndSendSection");
const willBePaid=document.querySelector(".willBePaid");
const willNotPaid=document.querySelector(".willNotPaid");
const willHalfPaid=document.querySelector(".willHalfPaid");
const addBtn=document.querySelector(".add-btn-popup");
const choisenCustomer=document.querySelector(".choisen-customer");

confirmAndSend.addEventListener("click", function () {
  btnConfirm.classList.add("hidden");
  confirmAndSendSection.classList.remove("hidden");
  document.getElementById("sent").classList.add("show");
});

function confirm(){
  btnConfirm.classList.add("hidden");
  willBePaid.classList.add("hidden");
  confirmAndSendSection.classList.remove("hidden");
  willHalfPaid.classList.remove("hidden");
  document.getElementById("sent").classList.add("show");
}

function continueBtn(){
	document.getElementById("invoice").classList.remove("show");
	document.getElementById("sent").classList.remove("show");
	document.getElementById("paid").classList.add("show");
}

function addCustomer(){
  addBtn.classList.add("hidden");
  choisenCustomer.classList.remove("hidden");
}

