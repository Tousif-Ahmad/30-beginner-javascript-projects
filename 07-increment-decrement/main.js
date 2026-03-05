let firstBasket = document.querySelector(".basket-1 span");
let secondBasket = document.querySelector(".basket-2 span");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

// console.log(firstBasket, secondBasket, leftArrow, rightArrow);
let totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.textContent = firstBasketAppleCount;
secondBasket.textContent = secondBasketAppleCount;

rightArrow.addEventListener("click", function () {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    firstBasket.textContent = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.textContent = secondBasketAppleCount;
  }
});

leftArrow.addEventListener("click", function () {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    firstBasket.textContent = firstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.textContent = secondBasketAppleCount;
  }
});
