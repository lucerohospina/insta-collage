let begin = () => {
  let arrPictures = [{ id: '0', name: 'image 1', uri: 'image1.jpg' },
    { id: '1', name: 'image 2', uri: 'image2.jpg' },
    { id: '2', name: 'image 3', uri: 'image3.jpg' },
    { id: '3', name: 'image 4', uri: 'image4.jpg' }];

  function imgRandom() {
    return arrPictures[parseInt(Math.random() * 10)];
  }

  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);

  let imgPrimary = document.getElementById('img-primary');
  let imgSelect = imgRandom();
  console.log(imgSelect);

  loadImg(imgPrimary, imgSelect.name, imgSelect.uri);
  loadNewFriends(imgSelect);

  function loadNewFriends(objImg) {
    let friends = document.getElementsByTagName('img');
    let arrImgUse = [];

    arrImgUse.push(objImg.id);
    console.log(arrImgUse);

    [...friends].forEach(el => {
      let img = null;

      do {
        img = imgRandom();
      } while (arrImgUse.includes(img.id));

      arrImgUse.push(img.id);

      loadImg(el, img.name, img.uri);
    });
  }

  function loadImg(content, name, uri) {
    content.setAttribute('src', `../assets/images/${uri}`);
    content.setAttribute('alt', `../assets/images/${name}`);
  }

  function drag(event) {
    console.log(event.target.id);
    event.dataTransfer.setData('text', event.target.id);
  }

  function permitirDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    if (event.target.className === 'img-collage') {
      let idFoto = event.dataTransfer.getData('text');
      console.log(idFoto)
      event.target.appendChild(document.getElementById(idFoto));
    }
  }
};

window.addEventListener('load', begin);
