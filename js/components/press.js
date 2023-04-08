function pressCard(img, title, description, button) {
    const collectionElement = document.createElement('div');
    collectionElement.className = 'col';
    collectionElement.innerHTML = `
        <div class="card h-100">
            <img style="width: 100%; height: 30vw; object-fit: cover;" src="assets/img/press/${img}" class="card-img-top" alt="${img}">
            <div class="card-body">
                <h5 class="card-title">${title.toLowerCase()}</h5>
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer bg-transparent border-0 d-flex justify-content-center">
                <b><a class="btn" href="${button.link}" role="button"><u>${button.title.toLowerCase()}</u></a></b>
            </div>
        </div>`;
    document.getElementsByClassName('row')[0].appendChild(collectionElement);
}

fetch('assets/img/press/press.json')
    .then(response => response.json())
    .then(data => data.forEach((press) => pressCard(
        press.img, press.title, press.description, press.button
    )));
