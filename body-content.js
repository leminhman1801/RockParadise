function rateProduct(starElement, rating) {
  // Tìm đến phần tử cha chứa thông tin sản phẩm
  var productItem = starElement.closest(".product-item");

  // Tìm đến phần tử con chứa đánh giá của sản phẩm
  var productRating = productItem.querySelector(".product-rating");

  // Đặt class "rated" cho các ngôi sao dựa trên đánh giá
  var stars = productRating.getElementsByClassName("star");
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove("rated");
  }
  for (var i = 0; i < rating; i++) {
    stars[i].classList.add("rated");
  }

  // Lưu trữ đánh giá vào cơ sở dữ liệu hoặc thực hiện các tác vụ khác
  console.log(`Đánh giá sản phẩm: ${rating}`);
}

const filterBtn = document.querySelectorAll(".btn-filter button");
const productList = document.querySelectorAll(".product-item");
const filterBrand = document.querySelectorAll(".filter-brand button");
console.log(filterBtn);

filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const typeColor = e.target.getAttribute("type-color");
    const typeSize = e.target.getAttribute("type-size");
    console.log(typeColor);

    document
      .querySelector(".btn-filter button.active")
      .classList.remove("active");
    e.target.classList.add("active");

    // filter elements
    productList.forEach((item) => {
      if (
        typeColor == "allColor" ||
        item.getAttribute("type-color") == typeColor
      ) {
        item.classList.remove("hide");
      } else if (
        typeSize == "allSize" ||
        item.getAttribute("type-size") == typeSize
      ) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});
filterBrand.forEach((brand) => {
  brand.addEventListener("click", (e) => {
    const typeBrand = e.target.getAttribute("type-brand");
    productList.forEach((item) => {
      if (
        typeBrand == "allBrand" ||
        item.getAttribute("type-brand") == typeBrand
      ) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});
