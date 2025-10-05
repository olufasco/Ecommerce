const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: "JORDAN",
    price: 99,
    colors: [
        {
            code: "black",
            img: "./img/JordanAir1.png",
        },
        {
            code: "red",
            img: "./img/JordanAir2.png",
        },
    ],
  },
  {
    id: 2,
    title: "SPORT",
    price: 99,
    colors: [
        {
            code: "green",
            img: "./img/NikeBig1.png",
        },
        {
            code: "white",
            img: "./img/NikeBig2.png",
        },
    ],
  },
  {
    id: 3,
    title: "SLIDE",
    price: 99,
    colors: [
        {
            code: "white",
            img: "./img/JordanSport1.png",
        },
        {
            code: "black",
            img: "./img/JordanSport2.png",
        },
    ],
  },
{
    id: 4,
    title: "AIR",
    price: 99,
    colors: [
        {
            code: "red",
            img: "./img/NikeAir1.png",
        },
        {
            code: "blue",
            img: "./img/NikeAir2.png",
        },
    ],
  },
  {
    id: 5,
    title: "ATLETE",
    price: 99,
    colors: [
        {
            code: "black",
            img: "./img/NikeSport1.png",
        },
        {
            code: "white",
            img: "./img/NikeSport2.png",
        },
    ],
  },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size"); 

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products [index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
   });
});

 currentProductColors.forEach((color,index) => {
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

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
}) 

close.addEventListener("click",()=>{
    payment.style.display="none"
})