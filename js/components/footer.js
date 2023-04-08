const footerComponent = document.createElement('footer');
footerComponent.className = 'py-3 mt-5';
footerComponent.innerHTML = `
    <div class="container">
        <div class="justify-content-center align-items-center">
        <div class="col-12 col-md-auto mb-3 mb-md-0 text-center">
            <a href="/index.html"><img src="assets/FMM_logo.webp" alt="Brand" class="img-fluid" id="footerLogo"></a>
        </div>
        <div class="col-12 col-md text-center my-3 ">
            <a href="https://www.facebook.com"><i class="fab fa-facebook fa-lg mx-3 text-dark"></i></a>
            <a href="https://www.instagram.com"><i class="fab fa-instagram fa-lg mx-3 text-dark"></i></a>
            <a href="https://www.linkedin.com"><i class="fab fa-linkedin fa-lg mx-3 text-dark"></i></a>
            <a href="mailto:info@example.com"><i class="fas fa-envelope fa-lg mx-3 text-dark"></i></a>
        </div>
        <div class="col-12 col-md-auto text-center">
            <small>&copy; fmm design</small>
        </div>
        </div>
    </div>
    </div>
    <style>
        #footerLogo{
            max-width: 12.5%;
        }
    </style>`;

document.getElementsByTagName('body')[0].appendChild(footerComponent);
