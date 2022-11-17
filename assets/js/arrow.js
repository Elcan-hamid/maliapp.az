const changeArrowEl = document.querySelectorAll(".changeArrowEl");
const rotateImgEl = document.querySelectorAll(".rotateImgEl");
for (let i = 0; i < changeArrowEl.length; i++) {
  changeArrowEl[i].addEventListener("click", function () {
    for (let j = 0; j < rotateImgEl.length; j++) {
      if (i == j) {
        rotateImgEl[j].classList.toggle("rotate-img");
      }
    }
  });
}

const changeArrowHover = document.querySelector(".changeArrowHover");
const rotateImgHover = document.querySelector(".rotateImgHover");

changeArrowHover.addEventListener("mouseover", function () {
  rotateImgHover.classList.add("rotate-img");
});

changeArrowHover.addEventListener("mouseout", function () {
  rotateImgHover.classList.remove("rotate-img");
});

// Contracts Popup

const closePopup = document.querySelector(".close-popup img");
const overlay = document.querySelector(".overlay");
const openPopup = document.querySelectorAll(".open-popup");

for (let i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener("click", function () {
    overlay.classList.remove("hiddenPopup");
  });
}
closePopup.addEventListener("click", function () {
  overlay.classList.add("hiddenPopup");
});

// Vergi hesablayici show-more

const showMoreTax = document.querySelector(".show-more-tax button");
const moreTaxContent = document.querySelector(".more-tax-content");

showMoreTax.addEventListener("click", function () {
  moreTaxContent.classList.toggle("showTax");
  if (moreTaxContent.classList.contains("showTax")) {
    showMoreTax.innerHTML = `Daha az göstər`;
  } else {
    showMoreTax.innerHTML = `Bütün siyahını göstər`;
  }
});
