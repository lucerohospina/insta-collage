window.addEventListener('load', () => {

  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);

  let imgPrimary = document.getElementById('img-primary');
  let imgSelect = document.getElementById('view1');
  console.log('-----');
  // let imgSelect = imgRandom();
  console.log(imgSelect);

  // loadImg(imgPrimary, imgSelect.name, imgSelect.uri);
  // loadNewFriends(imgSelect);

  // function loadNewFriends(objImg) {
  //   let friends = document.getElementsByTagName('img');
  //   let arrImgUse = [];

  //   arrImgUse.push(objImg.id); 

  //   [...friends].forEach(el => {
  //     let img = null;

  //     do {
  //       img = imgRandom();
  //     } while (arrImgUse.includes(img.id));

  //     arrImgUse.push(img.id);

  //     loadImg(el, img.name, img.uri);
  //   });
  // }

  // function loadImg(content, name, uri) {
  //   content.setAttribute('src', `../assets/images/${uri}`);
  //   content.setAttribute('alt', `../assets/images/${name}`);
  //   console.log(content);
  // }

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
      // console.log(idFoto);
      event.target.appendChild(document.getElementById(idFoto));
    }
  }


});

