const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

//For sliding
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

//---------------------------------->>>>>>>>>>>>>>>>>>>

const sliders = document.querySelectorAll(".slider");
var counter = 0;

sliders.forEach((slider, index) => {
  slider.style.left = `${index * 40}%`;
});

const goPrevious = () => {
  counter--;
  slideImagee();
};

const goNextOne = () => {
  counter++;
  slideImagee();
};

const slideImagee = () => {
  sliders.forEach((slider) => {
    slider.style.transform = `translateX(-${counter * 40}%)`;
  });
};



// Select all nav links and the content display area
const navLinks = document.querySelectorAll(".nav-link");
const contentDisplay = document.getElementById("content-display");

// Add a click event to each link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page refresh

    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    e.target.classList.add("active");

    // Get the content from the "data-content" attribute of the link
    const content = e.target.getAttribute("data-content");

    // Update the right-hand side content
    contentDisplay.textContent = content;
  });
});



//code for clicking link + content

// function showContent(contentId) {
//   var contentSections = document.getElementsByClassName("contents");
//   for (var i = 0; i < contentSections.length; i++) {
//     contentSections[i].classList.remove("active-content");
//   }
//   var selectedContent = document.getElementById(contentId);
//   if (selectedContent) {
//     selectedContent.classList.add("active-content");
//   }
// }
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll(".HTMList a");
//   const contents = document.querySelectorAll(".contents");
//   links.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const targetId = link.getAttribute("showContent()");
//       const targetContent = document.getElementById(targetId);
//       if (targetContent) {
//         window.scrollTo(0, 0);
//       }
//     });
//   });
// });

function showContent(contentId, event) {
  // Prevent default behavior of anchor tags
  if (event) {
    event.preventDefault();
  }

  var contentSections = document.getElementsByClassName("contents");
  var links = document.querySelectorAll(".HTMList a");

  // Reset all content and links
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].classList.remove("active-content");
  }
  links.forEach((link) => link.classList.remove("active-link"));

  // Activate selected content and link
  var selectedContent = document.getElementById(contentId);
  var activeLink = document.querySelector(`.HTMList a[onclick="showContent('${contentId}', event)"]`);

  if (selectedContent) {
    selectedContent.classList.add("active-content");
  }
  if (activeLink) {
    activeLink.classList.add("active-link");
  }
}

// Set default active link and content on page load
document.addEventListener("DOMContentLoaded", function () {
  const defaultContentId = "content1"; // ID of the first content
  showContent(defaultContentId);
});







/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


//popup form
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

// function togglePopup() {
//   document.getElementById("overlay").classList.toggle("active");
// }



