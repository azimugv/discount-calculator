document.getElementById("off30").addEventListener("click", function () {
  const priceContainer = document.getElementById("price");
  const priceString = priceContainer.innerText;
  const price = parseFloat(priceString);
  const newPrice = (price / 100) * 70;
  priceContainer.style.textDecoration = "line-through";
  const buyButton = document.getElementById("off30");
  buyButton.innerText = "Please Pay " + newPrice + " €";
});
