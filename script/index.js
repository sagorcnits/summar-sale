const card = document.querySelectorAll(".card");
let itemCount = 0;
for (let cardItem of card) {
  cardItem.addEventListener("click", function () {
    const itemName = cardItem.querySelector("h2").innerText;
    const itemPrice = cardItem.querySelector("p span").innerText;

    // console.log(itemName, itemPrice);
    itemCount++;
    addListItem(itemName);
    priceCalculate(itemPrice);
  });
}

// added list item

function addListItem(itemName) {
  const itemList = getElementId("item-list");
  const li = document.createElement("li");
  li.classList.add("mt-2");
  li.innerText = `${itemCount}.` + " " + itemName;
  itemList.appendChild(li);

  if (itemCount > 0) {
    getElementId("cupon-code").disabled = false;
  }
}
// calculate price
function priceCalculate(price) {
  let convertTotalPrice = convertNumber("total-price");
  let convertPrice = parseFloat(price);
  convertTotalPrice += convertPrice;
  console.log(convertTotalPrice);
  setTextValue("total-price", convertTotalPrice);
  setTextValue("total", convertTotalPrice);
}

// discount function

getElementId("apply").addEventListener("click", function () {
  const cuponCode = getElementId("cupon-code").value;

  if (cuponCode === "SELL20") {
    const totalPrice = convertNumber("total-price");
    const discountPrice = (totalPrice * 20) / 100;
    getElementId("discount").innerText = discountPrice;
    setTextValue("total", totalPrice - discountPrice);

    // cupon area
    getElementId("cupon-area").classList.add("hidden");
    getElementId("cupon-title").classList.remove("hidden");
  } else {
    alert('Sorry Cupon Code Invalid Please Try "SELL20"');
  }
});

// make purchase function

getElementId("make-purchase").addEventListener("click", function () {
  if (itemCount <= 0) {
    alert("Please Select Item");
  } else {
    getElementId("modal").classList.remove("hidden");
  }
});

// close modal
getElementId("close-modal").addEventListener("click", function () {
  getElementId("modal").classList.add("hidden");
  setTextValue("total-price", "00");
  setTextValue("total", "00");
  setTextValue("discount", "00");
  getElementId("item-list").innerText = "";
  itemCount = 0;
});
