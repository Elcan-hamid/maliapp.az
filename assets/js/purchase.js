$(document).ready(function () {
  $(".add-new-row2").click(function () {
    let addControls = "<tr class='my-3'>";
    addControls +=
      '<td class="d-inline-flex"><img src="../assets/images/table-icon.svg" alt="" class="mr-3"><input type="text" value="Avtomobil" class="input-lg"></td>';
    addControls +=
      '<td><select class="cost form-control"><option>Nəqliyyat</option></select></td>';
      addControls +=
      '<td><input type="text" value="5" class="w-100"></td>';
    addControls +=
      '<td><input type="text" value="kq" class="w-100"></td>';
      addControls +=
      '<td><input type="text" value="100" class="w-100"></td>';
    addControls +=
      '<td class="d-inline-flex flex-row"><input type="text" value="50" placeholder="Məbləğ" class="w-100"></td>';
    addControls +=
      '<td><img src="../assets/images/close.svg" class="close-img" data-toggle="modal" data-target="#approve"></td>'
    addControls += "</tr>";
    $("#adding-row2").append(addControls);
  });
});


const openDropdown=document.querySelector(".open-dropdown");
const dropdownn=document.querySelector(".dropdownn");

openDropdown.addEventListener("click", function(e){
  e.preventDefault();
  if(dropdownn.style.display === "none"){
    dropdownn.style.display="block";
  } else{
    dropdownn.style.display="none";
  }
});