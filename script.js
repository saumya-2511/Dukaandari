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




// function showContent(contentId, event) {
//   // Prevent default behavior of anchor tags
//   if (event) {
//     event.preventDefault();
//   }

//   var contentSections = document.getElementsByClassName("contents");
//   var links = document.querySelectorAll(".HTMList a");

//   // Reset all content and links
//   for (var i = 0; i < contentSections.length; i++) {
//     contentSections[i].classList.remove("active-content");
//   }
//   links.forEach((link) => link.classList.remove("active-link"));

//   // Activate selected content and link
//   var selectedContent = document.getElementById(contentId);
//   var activeLink = document.querySelector(`.HTMList a[onclick="showContent('${contentId}', event)"]`);

//   if (selectedContent) {
//     selectedContent.classList.add("active-content");
//   }
//   if (activeLink) {
//     activeLink.classList.add("active-link");
//   }
// }

// // Set default active link and content on page load
// document.addEventListener("DOMContentLoaded", function () {
//   const defaultContentId = "content1"; // ID of the first content
//   showContent(defaultContentId);
// });




function showContent(contentId, event) {
  // Prevent default behavior
  if (event) {
    event.preventDefault();
  }

  // Get all content sections and tabs
  const contentSections = document.getElementsByClassName("feature-content");
  const tabs = document.querySelectorAll(".feature-tab");

  // Hide all content sections and remove active classes from all tabs
  for (let i = 0; i < contentSections.length; i++) {
    contentSections[i].classList.remove("active");
  }
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Show selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }

  // Add active class to the clicked tab
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active");
  }
}

// Set default active tab and content on page load
document.addEventListener("DOMContentLoaded", function () {
  const defaultContentId = "content1"; // ID of the first content
  const defaultTab = document.querySelector(`.feature-tab[onclick*="${defaultContentId}"]`);
  showContent(defaultContentId, { preventDefault: () => {}, currentTarget: defaultTab });
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

// Pricing Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('billing-toggle');
  const monthlyPrices = ['999', '1,999', '2,999'];
  const annualPrices = ['799', '1,599', '2,399'];
  const monthlyBilling = ['Billed monthly', 'Billed monthly', 'Billed monthly'];
  const annualBilling = ['Billed annually at ₹9,588', 'Billed annually at ₹19,188', 'Billed annually at ₹28,788'];

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function() {
      const prices = document.querySelectorAll('.amount');
      const billingNotes = document.querySelectorAll('.billing-note');
      
      prices.forEach((price, index) => {
        price.textContent = this.checked ? monthlyPrices[index] : annualPrices[index];
      });
      
      billingNotes.forEach((note, index) => {
        note.textContent = this.checked ? monthlyBilling[index] : annualBilling[index];
      });
    });
  }
});

// Mobile Navigation Toggle
