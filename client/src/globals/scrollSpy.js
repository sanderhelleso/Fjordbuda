export function scrollSpy() {
    const header = document.querySelector("#historyHeader");
    const navbar = document.querySelector("#topNav");
    const logo = document.querySelector('#navLogo');
    const intro = document.querySelector('#historyIntro');

    if ((window.scrollY + 70) > (header.offsetTop + header.offsetHeight)) {
        navbar.classList.remove("topNavOnBg");
        navbar.classList.add("topNavOffBg");

        if (logo.src != 'img/logo/Vinje1_black.png') {
            logo.src = 'img/logo/Vinje1_black.png';
        }
    }

    else {
        navbar.classList.remove("topNavOffBg");
        navbar.classList.remove("topNavOffBgMobile");
        navbar.classList.add("topNavOnBg");

        if (logo.src != 'img/logo/Vinje1_white.png') {
            logo.src = 'img/logo/Vinje1_white.png';
        }

        intro.style.paddingTop = (window.scrollY / 5) + 'px';

    }
}

// check if device is mobile
function checkIfMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }
}