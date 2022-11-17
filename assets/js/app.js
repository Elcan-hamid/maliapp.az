document.addEventListener("DOMContentLoaded", function(){
  const blocks = document.querySelectorAll(".block");
  const continueBtn = document.querySelector(".continue-btn button");
  const headers=document.querySelectorAll(".nav-pills .menu-item");
  const sta_headers=document.querySelectorAll(".statistic-header .menu-item");
  const cost_headers=document.querySelectorAll(".cost-header .menu-item");

  blocks.forEach(block => {
      block.addEventListener("click", function(){
          blocks.forEach(btn => btn.classList.remove("block-active"));
          this.classList.add("block-active");
          continueBtn.style.backgroundColor = "#24be92";
      })
  });

  headers.forEach(header => {
    header.addEventListener("click", function(){
      headers.forEach(item => item.classList.remove("header-active"));
      this.classList.add("header-active");
    });
  });

  sta_headers.forEach(header => {
    header.addEventListener("click", function(){
      sta_headers.forEach(item => item.classList.remove("pill-active"));
      this.classList.add("pill-active");
    });
  });
  cost_headers.forEach(header => {
    header.addEventListener("click", function(){
      cost_headers.forEach(item => item.classList.remove("pill-active"));
      this.classList.add("pill-active");
    });
  });

  const preview_btn=document.getElementById("preview");
  const modal_container=document.getElementById("modal-container");
  const close=document.getElementById("close-modal");

  preview_btn.addEventListener("click", () => {
    modal_container.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });

});

//Add row

$(document).ready(function () {
  $(".add-new-row").click(function () {
    let addControls = "<tr class='my-3'>";
    addControls +=
      '<td class="d-inline-flex"><img src="../assets/images/table-icon.svg" alt="" class="mr-3"><input type="text" placeholder="Malın növü" class="input-lg"></td>';
    addControls +=
      '<td><input type="text" placeholder="Miqdarı" class="w-100 input-sm"></td>';
    addControls +=
      '<td><input type="text" placeholder="Ölçü vahidi" class="w-100 input-sm"></td>';
    addControls +=
      '<td><input type="text" placeholder="Vahidin qiyməti" class="w-100 input-sm"></td>';
    addControls +=
      '<td><input type="text" placeholder="Məbləğ" class="w-100 input-sm"></td>';
    addControls +=
      '<td><img src="../assets/images/close.svg" class="close-img" data-toggle="modal" data-target="#approve"></td>'
    addControls += "</tr>";
    $("#adding-row").append(addControls);
  });
  
  $(".default_option").click(function(){
    $(this).parent().toggleClass("active");
  })

  $(".select_ul li").click(function(){
    var currentele = $(this).html();
    $(this).parents(".select_wrap").find(".default_option li").html(currentele);
    $(this).parents(".select_wrap").find(".default_option li").addClass("select-color");
    $(this).parents(".select_wrap").removeClass("active");
  });

  $(".ul-pills li").click(function(){
    var currentele = $(this).html();
    $(this).parents(".select_pills").find(".default_option li").html(currentele);
    $(this).parents(".select_pills").find(".default_option li").addClass("select-color");
    $(this).parents(".select_pills").removeClass("active");
    var pan = $(this).find('.option').attr('data-pill');
    var tabs = $('.tab-pane');
    for(i=0;i<tabs.length;i++){
      tabs[i].className = 'tab-pane fade'
    }
    $('#'+pan).addClass('show active');
  });

});

// remove Parent element
function removeParent(elem){
  $(elem).parent('td').parent('tr').remove();
}

// remove Element
function removeElement(elem){
  elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);
}

const menu_icon=document.querySelector(".menu");
const close_icon=document.querySelector(".close-menu");
const nav=document.querySelector("nav");

menu_icon.addEventListener("click", () => {
  menu_icon.classList.add("hidden");
  close_icon.classList.remove("hidden");
  nav.classList.add("toggle");
});
close_icon.addEventListener("click", () => {
  menu_icon.classList.remove("hidden");
  close_icon.classList.add("hidden");
  nav.classList.remove("toggle");

});

// changeValyuta

const valyutaContent = document.querySelectorAll(".valyutaContent");
const changeValyuta = document.querySelectorAll(".changeValyuta");

  
for (let i = 0; i < changeValyuta.length; i++) {
  for (let j = 0; j < valyutaContent.length; j++) {
    changeValyuta[i].addEventListener("click", function (e) {
      e.preventDefault();

      if (i == j) {
        let temp = valyutaContent[j].textContent;
        changeValyuta[i].classList.add("space");
        valyutaContent[j].textContent = changeValyuta[i].textContent;
        changeValyuta[i].textContent = temp;
      }
    });
  }
}



// remove goods

const removeCurrentElement = document.querySelectorAll(".removeCurrentElement");
const elementToBeDeleted = document.querySelectorAll(".elementToBeDeleted");

for (let i = 0; i < removeCurrentElement.length; i++) {
  for (let j = 0; j < elementToBeDeleted.length; j++) {
    removeCurrentElement[i].addEventListener("click", function (e) {
      e.preventDefault();

      if (i == j) {
        removeCurrentElement[i].parentNode.parentNode.remove();
        elementToBeDeleted[j].remove();
      }
    });
  }
}

//signUp modal packet-container

function showSignUpContent() {

  let signUpContent = document.querySelector(".sign-up-content");
  let packetContent = document.querySelector(".packet-container");

  signUpContent.classList.remove("hidden");
  packetContent.classList.add("hidden");
}

// function resetSignUpModal() {
//   let signUpContent = document.querySelector(".sign-up-content");
//   let packetContent = document.querySelector(".packet-container");
 
//   signUpContent.classList.add("hidden");
//   packetContent.classList.remove("hidden");
// }