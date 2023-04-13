
function populateCarousel(title, text, active) {
    const carouselPar = document.createElement('div');
    carouselPar.className = `carousel-item ${active}`;
    carouselPar.innerHTML = `
    <div class="carousel-caption" style="top: 50%; filter: invert(100%);">
        <h3><i>${title}</i></h3>
        <p ><i>${text}</i></p>
    </div>`;
    document.getElementsByClassName('carousel-inner')[0].appendChild(carouselPar);
}

fetch('assets/img/press/press.json')
    .then(response => response.json())
    .then(data => data.forEach((carouselOjb, i) => populateCarousel(carouselOjb.title, carouselOjb.description, i === 0 ? 'active' : '')));