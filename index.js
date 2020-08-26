function a11yClick(event) {
  if (event.type === 'click') {
    return true;
  } else if (event.type === 'keypress'){
    let code = event.charCode || event.keyCode;
    if ((code === 32) || (code === 13)) {
      return true;
    }
  } else {
    return false;
  }
}

function handleThumbnailClicks() {
  $('.thumbnail').on('click keypress', e => {
    if (a11yClick(event) === true) {
      const imgSrc = $(event.currentTarget).find('img').attr('src');
      const imgAlt = $(event.currentTarget).find('img').attr('alt');

      $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    }
  });
}
$(handleThumbnailClicks);
