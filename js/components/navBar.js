
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg fixed-top';
nav.id = 'mainNav';
nav.innerHTML = `
    <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <a href="index.html" class="navbar-brand"><img id="logo" alt="logo" class="navbar-brand" src="assets/FMM_logo.webp" /></a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item${window.location.pathname === "index.html" ? ' currentPage' : ''}"><a class="nav-link" href="index.html">home</a></li>
                <li class="nav-item${window.location.pathname === "about.html" ? ' currentPage' : ''}"><a class="nav-link" href="about.html">fmm</a></li>
                <li class="nav-item${window.location.pathname === "collections.html" ? ' currentPage' : ''}"><a class="nav-link" href="collections.html">collections</a></li>
                <li class="nav-item${window.location.pathname === "press.html" ? ' currentPage' : ''}"><a class="nav-link" href="press.html">press</a></li>
                <li class="nav-item pe-5${window.location.pathname === "contactUs.html" ? ' currentPage' : ''}"><a class="nav-link" href="contactUs.html">contact us</a></li>
                <li class="nav-item ps-5"><a class="nav-link" href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li class="nav-item"><a class="nav-link" href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li class="nav-item"><a class="nav-link" href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
        </div>
    </div>`;

const navStyle = document.createElement('style');
navStyle.innerHTML = `
    #logo {
        max-width: 12.5%;
    }
    #mainNav {
        background: transparent;
    }
    .navbar {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        transition: transform 0.3s ease-in-out;
    }
    .navbar-hidden{
        transform: translateY(-100%);
    }
    .nav-item a,.nav-item i{
        color: #f5f5f5;
        text-shadow: 1px 1px #050505;
    }
    .currentPage { 
        text-decoration: Underline; 
    }`;
document.getElementsByTagName('head')[0].appendChild(navStyle);
document.getElementsByTagName('body')[0].appendChild(nav);

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.navbar').classList.remove('navbar-hidden');
    } else {
        document.querySelector('.navbar').classList.add('navbar-hidden');
    }
    prevScrollpos = currentScrollPos;
}