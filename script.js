let btn = document.querySelector('#btn');
let mobileNav = document.querySelector('.mobile-nav');
let menubtn = document.querySelector('#menubtn');
let closebtn = document.querySelector('#closebtn');
let active = false;

btn.addEventListener('click', () => {
   active?mobileNav.style.height="0px":mobileNav.style.height ="200px";
    menubtn.style.display = active?"block":"none";
    closebtn.style.display = active?"none":"block";
    active = !active;

});
