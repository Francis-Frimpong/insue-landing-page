const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const mobileLinks = document.querySelector('.mobileLinks');

hamburger.addEventListener('click', () => {
    mobileLinks.classList.toggle('openDrawer');
    closed.style.display = "block";
    hamburger.style.display = "none";
})

closed.addEventListener('click', () => {
    mobileLinks.classList.toggle('openDrawer');
    closed.style.display = "none";
    hamburger.style.display = "block";
})
