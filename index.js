fetch('https://myjson.dit.upm.es/api/bins/ggmi')
    .then((response) => response.json())
    .then(json => {
        console.log(json);
    });