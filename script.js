var sliderItem = document.querySelector(".sliderItem");
var lists = document.querySelectorAll("ul li a");
lists.forEach((items, index) => {
  items.addEventListener("click", () => {
    sliderItem.style.transform = `translateX(${-100 * index}vw)`
  })
})