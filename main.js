let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .carousel_list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.addEventListener("click", function () {
    showSlider("next");
});

prevDom.addEventListener("click", function () {
    showSlider("prev");
});

let timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .carousel_item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail_item");

    if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);
}
