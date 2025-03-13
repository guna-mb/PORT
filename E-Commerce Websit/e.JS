const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const dresses = [
  {
    id: 1,
    title: "EVENING DRESS",
    price: 79,
    colors: [
      {
        code: "red",
        img: "./img/summer_dress_red.png",
      },
      {
        code: "blue",
        img: "./img/summer_dress_blue.png",
      },
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    title: "CASUAL DRESS",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/evening_gown_black.png",
      },
      {
        code: "gold",
        img: "./img/evening_gown_gold.png",
      },
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    title: "COCKTAIL DRESSES",
    price: 89,
    colors: [
      {
        code: "green",
        img: "./img/maxi_dress_green.png",
      },
      {
        code: "pink",
        img: "./img/maxi_dress_pink.png",
      },
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: 4,
    title: "WEDDING DRESSES",
    price: 59,
    colors: [
      {
        code: "yellow",
        img: "./img/casual_dress_yellow.png",
      },
      {
        code: "white",
        img: "./img/casual_dress_white.png",
      },
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    title: "SUMMER DRESSES",
    price: 99,
    colors: [
      {
        code: "floral",
        img: "./img/floral_dress.png",
      },
      {
        code: "navy",
        img: "./img/floral_dress_navy.png",
      },
    ],
    sizes: ["M", "L"]
  },
];

let choosenDress = dresses[0];

const currentDressImg = document.querySelector(".productImg");
const currentDressTitle = document.querySelector(".productTitle");
const currentDressPrice = document.querySelector(".productPrice");
const currentDressColors = document.querySelectorAll(".color");
const currentDressSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenDress = dresses[index];


    currentDressTitle.textContent = choosenDress.title;
    currentDressPrice.textContent = "$" + choosenDress.price;
    currentDressImg.src = choosenDress.colors[0].img;

    currentDressColors.forEach((color, index) => {
      color.style.backgroundColor = choosenDress.colors[index].code;
    });

    currentDressSizes.forEach((size, index) => {
      size.textContent = choosenDress.sizes[index];
    });
  });
});

currentDressColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentDressImg.src = choosenDress.colors[index].img;
  });
});

currentDressSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentDressSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const dressButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

dressButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const buyButtons = document.querySelectorAll(".buyButton, .productButton");
const paymentModal = document.querySelector(".payment");
const closeModal = document.querySelector(".close");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        paymentModal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    paymentModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === paymentModal) {
        paymentModal.style.display = "none";
    }
});

const sizes = document.querySelectorAll(".size");

sizes.forEach(size => {
    size.addEventListener("click", () => {

        sizes.forEach(s => s.classList.remove("active"));

        size.classList.add("active");
    });
});




