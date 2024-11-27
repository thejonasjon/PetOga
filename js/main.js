'use strict'
// Index
const hamburgerMenu = document.querySelector(".hamburger-menu #hamburgerOpen");
const mobileMenu = document.querySelector(".hamburger-menu .mobile-menu");
const hamburgerClose = document.querySelector(".mobile-close #hamburgerClose");

const featuresDropdown = document.querySelector(".featuresDropdown");
const featuresDropdownMobile = document.querySelector(".featuresDropdownMobile");
const dropdown = document.querySelector(".featuresDropdown .dropdown");
const dropdownMobile = document.querySelector(".featuresDropdownMobile .dropdown");
const dropdownSvg = document.querySelector(".featuresDropdown svg");
const dropdownSvgMobile = document.querySelector(".featuresDropdownMobile svg");


dropdown.style.display = "none";
dropdownMobile.style.display = "none";

// Desktop Features Dropdown Event
featuresDropdown.addEventListener("mouseover", (e) => {
    dropdown.style.display = "block";
    dropdownSvg.style.transform = 'rotate(180deg)';
});

featuresDropdown.addEventListener("mouseleave", (e) => {
    dropdown.style.display = "none";
    dropdownSvg.style.transform = 'rotate(0deg)';
});

// Mobile
featuresDropdownMobile.addEventListener("click", (e) => {
    if (dropdownMobile.style.display === "block"){
        dropdownMobile.style.display = "none";
        dropdownSvgMobile.style.transform = 'rotate(0deg)';
    } else {
        dropdownMobile.style.display = "block";
        dropdownSvgMobile.style.transform = 'rotate(180deg)';
    }
});

const linksInDropdown = dropdown.querySelectorAll("a");
linksInDropdown.forEach(link => {
    link.addEventListener("click", (e) => {
        window.location.href = link.href;
    });
});

// Hamburger Menu Event
hamburgerMenu.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("show");
});

// Close Mobile Menu Event
hamburgerClose.addEventListener("click", (e) => {
    mobileMenu.classList.remove("show");
});


// FAQ
// Select all FAQ items
const faqItems = document.querySelectorAll('.faq .block-card');
console.log(faqItems);

//listen to each FAQ item
faqItems.forEach(item => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer');
  const icon = question.querySelector('span');

  question.addEventListener('mouseover', () => {
    answer.style.display = 'block';
    answer.style.transition = 'transform 0.6s ease-in-out';
    item.classList.add('no-border');
    item.classList.add('active');

    icon.style.transform = 'rotate(180deg)';
    icon.style.transition = 'transform 0.6s ease';
  });

  question.addEventListener('mouseout', () => {
    answer.style.display = 'none';
    item.classList.remove('no-border');
    item.classList.remove('active');

    icon.style.transform = 'rotate(0deg)';
  });
});

