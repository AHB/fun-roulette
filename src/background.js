function cage() {
  const images = document.images;
  if (images.length < 5) {
    document.body.style.backgroundImage = 'url(\'https://timenewsfeed.files.wordpress.com/2013/10/screen-shot-2013-10-09-at-4-10-39-pm.png?w=753\')';
  } else {
    let largestImg = 0;
    let largestSize = 0;
    for (let i = 0; i < images.length; i += 1) {
      const image = images[i];
      const size = image.width * image.height;
      if (size > largestSize) {
        largestSize = size;
        largestImg = image;
      }
    }
    largestImg.src = 'https://timenewsfeed.files.wordpress.com/2013/10/screen-shot-2013-10-09-at-4-10-39-pm.png?w=753';
    largestImg.srcset = '';
  }
}

function rotate() {
  const degrees = Math.round(Math.random() * 360);
  document.body.style = `-webkit-transform: rotate(${degrees}deg)`;
}

cage();
rotate();
