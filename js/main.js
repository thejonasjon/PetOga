'use strict'
// Index

const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".hamburger-menu .mobile-menu");
const hamburgerClose = document.querySelector(".mobile-close");

const featuresDropdown = document.querySelector(".featuresDropdown");
const dropdown = document.querySelector(".featuresDropdown .dropdown");
const dropdownSvg = document.querySelector(".featuresDropdown svg");

dropdown.style.display = "none";

// Features Dropdown Event
featuresDropdown.addEventListener("mouseover", (e) => {
    dropdown.style.display = "block";
    dropdownSvg.classList.add("svg--90dg");
});

featuresDropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
    dropdownSvg.classList.remove("svg--90dg");
});

dropdown.addEventListener("mouseover", () => {
    dropdown.style.display = "block";
});

dropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
});

const linksInDropdown = dropdown.querySelectorAll("a");
linksInDropdown.forEach(link => {
    link.addEventListener("click", (e) => {
        window.location.href = link.href;
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    dropdown.classList.remove("show");
    dropdownSvg.classList.remove("svg--90dg");
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

//listeners to each FAQ item
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


