// Get the carousel items and modal
const carouselItems = document.querySelectorAll(".card");
const modal = document.querySelector(".modal-gallery");
const mainImage = document.querySelector(".gallery-main img");
const thumbnailImages = document.querySelector(".thumbnail-images");

const infoRockParadise = [
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",

    subSrc: [
      "./images/candyGem2",
      "./images/candyGem2",
      "./images/candyGem2",
      "./images/candyGem2",
      "./images/candyGem2",
      "./images/candyGem2",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0",
    subSrc: [
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
      "./images/candyGem1",
    ],
  },
];
infoRockParadise.forEach((info) => {
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("p");

  const cardBody = document.createElement("div");
  const cardPrice = document.createElement("span");

  cardPrice.innerText = info.price;

  cardTitle.innerText = info.title;
  cardTitle.className = "card-title";

  cardBody.className = "card-body";

  cardImg.setAttribute("src", info.src);
  cardImg.className = "card-img-top";

  cardBody.appendChild(cardTitle);
});
// Add event listeners to each carousel item

carouselItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the clicked image source
    const imageSrc = item.querySelector("img").getAttribute("src");
    // Set the main image source in the modal
    mainImage.setAttribute("src", imageSrc);

    // Clear the thumbnail images container
    thumbnailImages.innerHTML = "";
    // Create an array to store thumbnail image sources
    const thumbnailImageSources = [];

    // Push the main image source to the thumbnail image sources array
    thumbnailImageSources.push(imageSrc);
    // Create 7 random thumbnail images
    // Generate a random image source (replace with your own image sources)
    for (let i = 0; i < 7; i++) {
      const randomImageSrc = `./images/candyGem${i}.webp`;
      console.log(randomImageSrc);
      thumbnailImageSources.push(randomImageSrc);
    }
    // Create a thumbnail image
    thumbnailImageSources.forEach((imageSrc, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.setAttribute("src", imageSrc);
      thumbnail.setAttribute("alt", "Thumbnail " + (index + 1));

      // Add a click event listener to the thumbnail image
      thumbnail.addEventListener("click", () => {
        // Set the clicked thumbnail as the main image
        mainImage.setAttribute("src", imageSrc);
      });
      // Append the thumbnail image to the container
      thumbnailImages.appendChild(thumbnail);
    });
    // Display the modal
    modal.style.display = "block";
  });
});

// Add event listener to the close button
const closeBtn = document.querySelector(".btn-close");
console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
