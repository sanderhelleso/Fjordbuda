export function scrollSpy() {
    const header = document.querySelector("#historyHeader");
    const navbar = document.querySelector("#topNav");
    const logo = document.querySelector('#navLogo');
    const intro = document.querySelector('#historyIntro');
    console.log(window.scrollY / 10);
    //intro.style.transform = `scale(0.${+window.scrollY / 10})`;
    console.log(header.style.height + (window.scrollY / 10));
    

    if ((window.scrollY + 75) > (header.offsetTop + header.offsetHeight)) {
        navbar.classList.remove("topNavOnBg");
        navbar.classList.add("topNavOffBg");
        logo.src = 'img/logo/Vinje1_black.png';

        // display bg on nav if mobile
        if (checkIfMobile()) {
            navbar.classList.add("topNavOffBgMobile");
        }

    }

    else {
        navbar.classList.remove("topNavOffBg");
        navbar.classList.remove("topNavOffBgMobile");
        navbar.classList.add("topNavOnBg");
        logo.src = 'img/logo/Vinje1_white.png';

        intro.style.paddingTop = (window.scrollY / 5) + 'px';

    }
}

// check if device is mobile
function checkIfMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }
}