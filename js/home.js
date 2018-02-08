window.addEventListener('load', function() {
  function dragManager(event) {
    if (event.target.classList.contains('drag-img')) {
      event.dataTransfer.setData('text', event.target.getAttribute('src'));
    }
  };

  function dropPerm(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    return false;
  };

  function dropManager(event) {
    event.preventDefault();
    if (event.target.classList.contains('drop-img')) {
      var imgUrl = event.dataTransfer.getData('text');
      event.target.style.backgroundImage = `url(${imgUrl})`;
      event.target.style.backgroundRepeat = ('no-repeat');
      event.target.style.backgroundSize = ('100% 100%');
    }
  };

  document.addEventListener('dragstart', dragManager, false);
  document.addEventListener('dragover', dropPerm, false);
  document.addEventListener('drop', dropManager, false);
});
