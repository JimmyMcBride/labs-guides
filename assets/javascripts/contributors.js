(function () {
  const contrib_imgs = document.querySelectorAll( '.contributors li img' )
  Array.prototype.forEach.call(contrib_imgs, item => {
    if (item.dataset.src) {
      item.src = item.dataset.src.replace("size=24", "size=100");
    }
  });
})();