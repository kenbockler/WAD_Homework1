fetch('https://myjson.dit.upm.es/api/bins/az66')
    .then((response) => response.json())
    .then(json => {
        json.Posts.forEach(post => {
            let bodyCardDiv = document.createElement('div');
            let cardHeaderDiv = createCardHeader(post.create_time);
            bodyCardDiv.appendChild(cardHeaderDiv);

            if (post.images) {
                bodyCardDiv.className = 'pictureBodyCard';

                let image = createImageElement('cardImage', post.images, post.alt)
                let imageText = document.createElement('p')
                imageText.innerText = post.body;

                bodyCardDiv.appendChild(image);
                bodyCardDiv.appendChild(imageText);
            }
            else {
                bodyCardDiv.className = 'textBodyCard';

                // create main text element
                let textCardDiv = document.createElement('div');
                textCardDiv.className = 'textCard';
                let textCardPar = document.createElement('p')
                textCardPar.innerText = post.body;
                textCardDiv.appendChild(textCardPar);
                bodyCardDiv.appendChild(textCardDiv);
            }

            let thumbsUpImg = createImageElement('thumbsUp', 'res/images/thumbs-up-regular.svg', 'Thumbs up image');
            bodyCardDiv.appendChild(thumbsUpImg);
            document.getElementsByClassName('mainBody').item(0).appendChild(bodyCardDiv);
        });
    });

function createCardHeader(dateString) {
    let cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'cardHeader';

    let cardHeaderImg = createImageElement('cardProfilePicture', 'res/images/me.png', 'Profile picture');

    let cardHeaderPar = document.createElement('p');
    cardHeaderPar.innerText = dateString;

    cardHeaderDiv.appendChild(cardHeaderImg);
    cardHeaderDiv.appendChild(cardHeaderPar);
    return cardHeaderDiv;
}

function createImageElement(className, src, alt) {
    let imageElement = document.createElement('img');
    imageElement.className = className;
    imageElement.src = src;
    imageElement.alt = alt;
    return imageElement;
}