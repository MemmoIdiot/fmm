
function teaser(img, text, rgbColor) {
    const teaserElement = document.createElement('div');
    teaserElement.className = 'card border-0';
    teaserElement.innerHTML = ` 
    <img src="assets/img/collections/${img.replace(' ', '%20')}" style="object-fit: cover; object-position: center;" class="card-img img-fluid h-100 mw-100" alt="${img}">
    <a href="collections.html" class="overlay" style="text-decoration:none; background-color: rgba(${rgbColor.join(', ')}, 0.35);">
        <div class="text">${text}</div>
    </a>`;
    document.getElementsByClassName('card-group')[0].appendChild(teaserElement);

}

fetch('assets/img/collections/teaser.json')
    .then(response => response.json())
    .then(data => data.forEach((collection) => teaser(
        collection.img, collection.text, collection.color
    )));
