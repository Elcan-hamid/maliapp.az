$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 2000 && sc < 2700) {
      $(".animatedNavLine").css("left", "23.5%");
      $(".animatedNavLine").css("width", "110px");
  } else if (sc > 2701 && sc < 3500) {
      $(".animatedNavLine").css("left", "46.5%");
      $(".animatedNavLine").css("width", "130px");
  } else {
      $(".animatedNavLine").css("left", "2.5%");
      $(".animatedNavLine").css("width", "100px");
  }
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(".toggle-password").click(function () {

    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }

});


document.querySelector('.forgotPasswordLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.forgotPassword').classList.remove('hidden');
    document.querySelector('.sign-in-content').classList.add('hidden');
});
//login 
// document.querySelector('.login').addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector('.forgotPassword').classList.add('hidden');
//     document.querySelector('.sign-in-content').classList.remove('hidden');
// });

document.querySelectorAll(".login").forEach(function(login) {
    login.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector('.forgotPassword').classList.add('hidden');
        document.querySelector('.sign-in-content').classList.remove('hidden');
    });
});

//sendPassword

document.querySelector('.sendPassword').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.updatePassword').classList.remove('hidden');
    document.querySelector('.forgotPassword').classList.add('hidden');
});

// Typing Effect

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["mühasibatlıq həlli", "uçot proqramı", "sənədləşmə həlli", "vergi hesablayıcısı"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
    if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

$("#slickCarousel").slick({
  centerMode: true,
  pauseOnFocus: true,
  autoplay: true,
  arrows: false,
  draggable: true,
  autoplaySpeed: 2000,
  infinite: false,
});

