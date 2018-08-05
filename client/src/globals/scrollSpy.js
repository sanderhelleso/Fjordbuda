import $ from 'jquery'; 

export function scrollSpy() {
    const header = document.querySelector("#historyHeader");
    const navbar = document.querySelector("#topNav");
    const logo = document.querySelector('#navLogo');
    const intro = document.querySelector('#historyIntro');

    progressBar(window.scrollY);

    if ((window.scrollY + 20) > (header.offsetTop + header.offsetHeight)) {
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

        // animate bg overlay on scroll
        intro.style.top = '-' + (window.scrollY / 4.5) + 'px';
    }
}

// check if device is mobile
function checkIfMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }
}

// fill progressbar depending on scrolled content
function progressBar(px) {
    const progressBar = document.getElementById("progressBar");
    const docHeight = $(document).height();
    let currentPos = document.documentElement.scrollTop || document.body.scrollTop;
    let pos = currentPos / docHeight.toFixed();
    let perc = (pos * 110.291);
    progressBar.style.width = (perc * 1.05) + "%";
}