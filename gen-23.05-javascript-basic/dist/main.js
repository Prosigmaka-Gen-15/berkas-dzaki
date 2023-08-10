function changeImage (gambar) {
  const mainImage = document.getElementById("main-img-preview")
  mainImage.src = gambar
}

// const mainImage = document.getElementById("main-img");
// const imageGrid = document.getElementById("change-img");
// imageGrid.addEventListener("click", (event) => {
//   if (event.target.tagName === "IMG") {
//     const clickedImageUrl = event.target.getAttribute("src");
//     mainImage.querySelector("img").setAttribute("src", clickedImageUrl);
//   }
// });