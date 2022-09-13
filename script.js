window.onscroll = () => {
    let navbar = document.querySelector('.ctn__navbar');
    if(window.scrollY > navbar.style.height) {
        navbar.classList.add('ctn__navbar--scrolled');
    }
    else {
        navbar.classList.remove('ctn__navbar--scrolled');
    }
};