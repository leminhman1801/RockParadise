// Get the carousel items and modal
const carouselItems = document.querySelectorAll(".card");
const modal = document.querySelector(".modal-gallery");
const mainImage = document.querySelector(".gallery-main img");
const thumbnailImages = document.querySelector(".thumbnail-images");

const infoRockParadise = [
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem2.webp",
      "./images/candyGem2.webp",
      "./images/candyGem2.webp",
      "./images/candyGem2.webp",
      "./images/candyGem2.webp",
      "./images/candyGem2.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
  {
    title: "Zodiac Crystal",
    price: "99$",
    src: "./images/candyGem0.webp",
    subSrc: [
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
      "./images/candyGem1.webp",
    ],
  },
];
// const infoRockParadise1 = infoRockParadise.slice(0, 4);
// const infoRockParadise2 = infoRockParadise.slice(4, 9);
// const infoRockParadise3 = infoRockParadise.slice(9);

const rows = [
  document.getElementById("row1"),
  document.getElementById("row2"),
  document.getElementById("row3"),
];
console.log(infoRockParadise);
infoRockParadise.forEach((info, index) => {
  const container = document.createElement("div");
  const cardContainer = document.createElement("div");
  const cardContent = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardPrice = document.createElement("span");
  const cardBtn = document.createElement("a");
  console.log(index);
  cardPrice.innerText = info.price;

  cardTitle.innerText = info.title + "<br/>";
  cardTitle.className = "card-title";

  cardBtn.href = "#!";
  cardBtn.className = "btn btn-primary";

  cardBody.className = "card-body";

  cardImg.setAttribute("src", info.src);
  cardImg.className = "card-img-top";

  cardTitle.appendChild(cardPrice);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardBtn);

  cardContent.className = "card";
  cardContent.appendChild(cardImg);
  cardContent.appendChild(cardBody);

  cardContainer.className = "col-lg-3 mb-4 mb-lg-0 d-none d-lg-block";
  cardContainer.appendChild(cardContent);

  rows[Math.floor(index / 4)].appendChild(cardContainer);
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
      const randomImageSrc = `./images/candyGem$.webp{i}.webp`;
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
