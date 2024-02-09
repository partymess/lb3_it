const inputsHeight = document.querySelectorAll('.inputHeight');
const inputsWidth = document.querySelectorAll('.inputWidth');
const inputsBorderWidth = document.querySelectorAll('.inputBorderWidth');
const inputsAltText = document.querySelectorAll('.inputAltText');

function handleOpenBlock(id) {

      const div = document.getElementById(id);

      if(div.style.display === 'block') {
            div.style.display = 'none'
      } else {
            div.style.display = 'block';
      }
}

inputsHeight.forEach(input => {
      const currentImageId = input.parentElement.parentElement.id[input.parentElement.parentElement.id.length - 1];
      const currentImage = document.getElementById(`${currentImageId}`);
      input.addEventListener('input', e => {
            const futureHeight = e.target.value
            if(futureHeight >= 20 && futureHeight <= 1000) {
                  currentImage.style.height = e.target.value + 'px';
            } else {
                  currentImage.style.height = '70px'
            }

            if(!futureHeight) {
                  currentImage.style.height = '70px'
            }
      })
});

inputsWidth.forEach(input => {
      const currentImageId = input.parentElement.parentElement.id[input.parentElement.parentElement.id.length - 1];
      const currentImage = document.getElementById(`${currentImageId}`);
      input.addEventListener('input', e => {
            const futureWidth = e.target.value;
            if(futureWidth >= 20 && futureWidth <= 1000) {
                  currentImage.style.width = e.target.value + 'px';
            } else {
                  currentImage.style.width = '70px'
            }

            if(!futureWidth) {
                  currentImage.style.width = '70px'
            }
      })
});

inputsBorderWidth.forEach(input => {
      const currentImageId = input.parentElement.parentElement.id[input.parentElement.parentElement.id.length - 1];
      const currentImage = document.getElementById(`${currentImageId}`);
      input.addEventListener('input', e => {
            const futureBorderWidth = e.target.value;
            console.log(futureBorderWidth);
            if(futureBorderWidth >= 1 && futureBorderWidth <= 50) {
                  currentImage.style.border = `${e.target.value + 'px'} solid aquamarine`;
            }
            if(!futureBorderWidth) {
                  currentImage.style.border = `0px solid aquamarine`;
            }
      })
});


inputsAltText.forEach(input => {
      const currentImageId = input.parentElement.parentElement.id[input.parentElement.parentElement.id.length - 1];
      const currentImage = document.getElementById(`${currentImageId}`);
      input.addEventListener('input', e => {
            const futureAltText = e.target.value;

            if(futureAltText.length >= 1 && futureAltText.length <= 50) {
                  currentImage.alt = e.target.value
            }
            if(!futureAltText) {
                  currentImage.alt = `img${currentImageId}`;
            }
      })
});
