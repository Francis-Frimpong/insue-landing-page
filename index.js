const hamburgerManu = document.querySelector(".hamburgerManu");
const closeManu = document.querySelector(".closeManu");
const mobileLinks = document.querySelector('.mobileLinks')


hamburgerManu.addEventListener('click', () => {
    // mobileLinks.classList.toggle('openDrawer');
    console.log('click');
})
closeManu.addEventListener('click', () => {
    mobileLinks.classList.toggle('openDrawer');
})
