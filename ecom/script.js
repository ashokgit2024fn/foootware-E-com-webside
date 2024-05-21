const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price:11900,
    desc:"Air Force fashion effortlessly merges casual comfort with urban chic, making it perfect for everyday wear. With its iconic silhouette and versatile designs, Air Force shoes add a touch of laid-back elegance to any outfit. Embrace the relaxed sophistication of Air Force fashion for a stylish yet comfortable look.",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      }, 
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price:14900,
   desc:"Air Jordan fashion epitomizes the perfect fusion of athletic performance and streetwear flair. From iconic high-tops to sleek low-tops, Air Jordan shoes offer a blend of style and functionality. Embrace the legacy of Air Jordan fashion for a bold and dynamic statement on and off the court.",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price:10900,
    desc:"Blazer fashion exudes sophistication and versatility, blending timeless elegance with contemporary trends. From tailored silhouettes to casual coolness, Blazer shoes elevate any ensemble with effortless style. Embrace the refined charm of Blazer fashion for a polished yet laid-back look.",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 12900,
    desc:"Crater fashion embodies sustainability and innovation, offering eco-conscious designs with a modern edge. With its unique blend of recycled materials and futuristic aesthetics, Crater shoes redefine eco-friendly footwear. Embrace the progressive spirit of Crater fashion for a stylish and sustainable statement.",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 9900,
    desc:"Hippie fashion channels retro vibes and free-spirited energy, blending bohemian aesthetics with contemporary trends. From earthy tones to vibrant patterns, Hippie shoes embrace individuality and self-expression. Embrace the carefree charm of Hippie fashion for a laid-back and eclectic look.",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");




menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price+".00";
    console.log("Description:", choosenProduct.desc);
    currentProductDesc.textContent=choosenProduct.desc
    currentProductImg.src = choosenProduct.colors[0].img;
    //change the product Desc
    currentProductDesc.textContent = products[index].desc;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});