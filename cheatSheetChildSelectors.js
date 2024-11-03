// --First row --
const firstImg = document.querySelector(".images").firstElementChild;
const firstBtn = document.querySelector('#firstrow button');

firstBtn.addEventListener('click', () => {
  if (firstImg.src.includes("cat-image.jpg")) {
    firstImg.src = "./cat-image-changed.jpg";
    firstBtn.textContent = 'Hidden';
    firstBtn.style.background = 'green';
  } else  {
    firstImg.src = "./cat-image.jpg";
    firstBtn.textContent = "Show";
    firstBtn.style.background = "blue";
  }
});

// --Second row --
const secondImgRow2 = document.querySelectorAll("#secondrow img")[1];
const secondBtn = document.querySelector("#secondrow button");

secondBtn.addEventListener("click", () => {
  if (secondImgRow2.src.includes("cat-image.jpg")) {
    secondImgRow2.src = "./cat-image-changed.jpg";
    secondBtn.textContent = "Hidden";
    secondBtn.style.background = "green";
  } else {
    secondImgRow2.src = "./cat-image.jpg";
    secondBtn.textContent = "Show";
    secondBtn.style.background = "blue";
  }

});

// -- Third row --
const thirdRowImages = document.querySelectorAll(
  "#thirdrow img:nth-child(even)");
const thirdBtn = document.querySelector('#thirdrow button');

thirdBtn.addEventListener('click', () => {
  thirdRowImages.forEach(img => {
    if (img.src.includes("cat-image.jpg")) {
      img.src = "./cat-image-changed.jpg";
      thirdBtn.textContent = "Hidden";
      thirdBtn.style.background = "green";
    } else {
      img.src = "./cat-image.jpg";
      thirdBtn.textContent = "Show";
      thirdBtn.style.background = "blue";
    }
  });
});

// -- Fourth row --
const fourthRowImages = document.querySelectorAll('#fourthrow img:nth-child(odd)');
const fourthBtn = document.querySelector("#fourthrow button");

fourthBtn.addEventListener('click', () => {
  fourthRowImages.forEach(img => {
    if (img.src.includes("cat-image.jpg")) {
      img.src = "./cat-image-changed.jpg";
      fourthBtn.textContent = "Hidden";
      fourthBtn.style.background = "green";
    } else {
      img.src = "./cat-image.jpg";
      fourthBtn.textContent = "Show";
      fourthBtn.style.background = "blue";
    }
  })
});


// -- Fifth row --
const fifthrowImg = document.querySelectorAll('#fifthrow img:nth-child(2)')[0];
const fifthBtn = document.querySelector("#fifthrow button");

fifthBtn.addEventListener('click', () => {
  if (fifthrowImg.src.includes("cat-image.jpg")) {
    fifthrowImg.src = "./cat-image-changed.jpg";
    fifthBtn.textContent = "Hidden";
    fifthBtn.style.background = "green";
  } else {
    fifthrowImg.src = "./cat-image.jpg";
    fifthBtn.textContent = "Show";
    fifthBtn.style.background = "blue";
  }
})


// -- Sixth row --
const sixthrowImages = document.querySelectorAll('#sixthrow img:nth-child(4n)');
const sixthBtn = document.querySelector('#sixthrow button');

sixthBtn.addEventListener('click', () => {
  sixthrowImages.forEach((img) => {
    if (img.src.includes("cat-image.jpg")) {
      img.src = "./cat-image-changed.jpg";
      sixthBtn.textContent = "Hidden";
      sixthBtn.style.background = "green";
    } else {
      img.src = "./cat-image.jpg";
      sixthBtn.textContent = "Show";
      sixthBtn.style.background = "blue";
    }
  });
})
// --


// -- Seventh row --
const seventhrowImages = document.querySelectorAll('#seventhrow img:nth-child(n+3)');
const seventhBtn = document.querySelector('#seventhrow button');

seventhBtn.addEventListener('click', () => {
  seventhrowImages.forEach(img => {
    if (img.src.includes("cat-image.jpg")) {
      img.src = "./cat-image-changed.jpg";
      seventhBtn.textContent = "Hidden";
      seventhBtn.style.background = "green";
    } else {
      img.src = "./cat-image.jpg";
      seventhBtn.textContent = "Show";
      seventhBtn.style.background = "blue";
    }
  })
});


// -- Eighth row --
const eighthrowImages = document.querySelectorAll('#eighthrow img:nth-child(-n+3)');
const eighthBtn = document.querySelector('#eighthrow button');

eighthBtn.addEventListener('click', () => {
  eighthrowImages.forEach(img => {
    if (img.src.includes("cat-image.jpg")) {
      img.src = "./cat-image-changed.jpg";
      eighthBtn.textContent = "Hidden";
      eighthBtn.style.background = "green";
    } else {
      img.src = "./cat-image.jpg";
      eighthBtn.textContent = "Show";
      eighthBtn.style.background = "blue";
    }
  })
});

// -- Ninth row --
const ninthrowImages = document.querySelectorAll('#ninthrow img:nth-child(3n+1)');
const ninthBtn = document.querySelector('#ninthrow button');

ninthBtn.addEventListener('click', () => {
  ninthrowImages.forEach(img => {
    if (img.src.includes("cat-image.jpg")) {
      console.log('show');
      img.src = "./cat-image-changed.jpg";
      ninthBtn.textContent = "Hidden";
      ninthBtn.style.background = "green";
    } else {
      console.log("hidden");
      img.src = "./cat-image.jpg";
      ninthBtn.textContent = "Show";
      ninthBtn.style.background = "blue";
    }
  })
})
/*
const firstImgElement = document.querySelector(".images").firstElementChild;
const firstBtn = document.querySelector("#firstrow button");

firstBtn.addEventListener("click", () => {
  if (firstImgElement.src.includes("cat-image.jpg")) {
    console.log("Switching to new src");
    firstImgElement.src = "./cat-image-changed.jpg";
  } else {
    console.log("Switching to old src");
    firstImgElement.src = "./cat-image.jpg";
  }
});*/
