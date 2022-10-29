fetch('https://myjson.dit.upm.es/api/bins/ggmi')
    .then((response) => response.json())
    .then(json => {
        console.log(JSON.stringify(json));

        // create a new card element div
        let textBodyCardDiv = document.createElement('div');
        textBodyCardDiv.className = 'textBodyCard';

        // create card header element
        let cardHeaderDiv = createCardHeader('Oct 22, 2022');
        textBodyCardDiv.appendChild(cardHeaderDiv);

        // create main text element
        let textCardDiv = document.createElement('div');
        textCardDiv.className = 'textCard';
        let textCardPar = document.createElement('p')
        textCardPar.innerText = 'Anyone knows in which room is the lab today?'
        textCardDiv.appendChild(textCardPar);
        textBodyCardDiv.appendChild(textCardDiv);

        let thumbsUpImg = createImageElement('thumbsUp', 'res/images/thumbs-up-regular.svg', 'Thumbs up image');
        textBodyCardDiv.appendChild(thumbsUpImg);

        document.getElementsByClassName('mainBody').item(0).appendChild(textBodyCardDiv);
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