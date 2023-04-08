function createCollectionElement(img, title, collectionColor) {
    const collectionElement = document.createElement('div');
    collectionElement.className = 'col';
    collectionElement.innerHTML = `
        <div class="card collectionElement">
            <img style="width: 100%; height: 25vw; object-fit: cover;" src="assets/img/collections/${img}" class="card-img" alt="${img}">
            <div class="overlay" style="background-color: rgba(${collectionColor.join(', ')}, 0.35);">
                <div class="text" id=${title}>${title}</div>
            </div>
        </div>`;
    document.getElementsByClassName('row')[0].appendChild(collectionElement);
}

function getCarouselContent(piece) {
    let carouselIndicators = '<div class="carousel-indicators">';
    let carsouselContent = '<div class="carousel-inner">';
    let carouselThumbnails = '<div class="carousel-indicators">';
    piece.carousel.forEach((pic, i) => {
        const imgPath = `assets/img/collections/${pic}`;
        const divClosed = i === piece.carousel.length - 1 ? '</div>' : ''
        const activated = i === 0 ? ' class="active" aria-current="true"' : '';
        carouselIndicators += `<button type="button" data-bs-target="#carousel" data-bs-slide-to="${i}"${activated} aria-label="Slide ${i}"></button>${divClosed}`;
        carsouselContent += `
        <div style="height: 360px;" class="carousel-item${i === 0 ? ' active' : ''}" data-bs-interval="2000">
            <div class="d-flex justify-content-center">
                <a href="${imgPath}"><img style="height: 360px;" src="${imgPath}" class="d-block" alt="${pic}"></a>
            </div>
        </div>${divClosed}`;
        carouselThumbnails += `
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="${i}" ${activated} aria-label="Slide ${i}" style="width: 100px;">
            <img class="d-block w-100" src="${imgPath}" class="img-fluid" />
        </button>${divClosed}`;
    });
    return `
        ${carsouselContent}
        ${carouselIndicators}
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        <!--${carouselThumbnails}-->`;
}


function findCollectionElement(collectionData, hoveridedName) {
    return collectionData.filter(el => el.text.toLowerCase() === hoveridedName)[0];
}

function getPieceDetail(piece, collectionColor) {
    const pieceDetail = document.createElement('div');
    pieceDetail.className = 'row m-5';
    pieceDetail.innerHTML = `
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card border-0" style="background-color: rgba(${collectionColor.join(', ')}, 0.35);">
                <div class="card-body">
                    <div class="card-text">
                        ${piece.description}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card border-0" style="background-color: rgba(${collectionColor.join(', ')}, 0.35);">
                <div class="card-body">
                    <img src="assets/FMM_logo.webp" class="card-img-top" />
                    <div class="card-text">
                        ${piece.specifics}
                    </div>
                </div>
            </div>
        </div>`;
    return pieceDetail;
}

function collectionClick(event, collections) {
    const collectionName = event.target.querySelector('.text').id;
    document.querySelector('.display-5').textContent = collectionName;
    document.querySelector('.row.row-cols-1.row-cols-md-3.g-4').innerHTML = '';
    const collection = findCollectionElement(collections, collectionName);
    collection.pieces.forEach(piece => createCollectionElement(
        piece.img, piece.text.toLowerCase(), collection.color));
    document.querySelectorAll('.collectionElement').forEach(piece => {
        piece.addEventListener('click', event => {
            const pieceName = event.target.querySelector('.text').innerHTML;
            document.querySelector('.display-5').textContent = pieceName;
            document.querySelector('.collectionsContainer').remove();
            const carousel = document.createElement('div');
            carousel.className = 'carousel carousel-dark slide';
            carousel.id = 'carousel';
            carousel.style = 'height:360px;'
            const piece = findCollectionElement(collection.pieces, pieceName);
            carousel.innerHTML = getCarouselContent(piece);
            document.getElementById('collections').appendChild(carousel);
            document.getElementById('collections').appendChild(getPieceDetail(piece, collection.color));
        });
    });
}


fetch('assets/img/collections/collections.json')
    .then(response => response.json())
    .then(collections => {
        collections.forEach(collection => createCollectionElement(
            collection.img, collection.text.toLowerCase(), collection.color
        ));
        return collections;
    })
    .then(collections => document.querySelectorAll('.collectionElement').forEach(collectionCard => collectionCard.addEventListener('click', (event) => collectionClick(event, collections))));
