
function ShopInformation(target) {
    const itemTitle = target.querySelector(".item-title").innerText;

    const setItemList = document.getElementById("item-list");
    const li = document.createElement("h2");
    li.innerText = itemTitle;
    setItemList.appendChild(li);



    const setTotalPrice = parseInt(target.querySelector(".item-price").innerText);

    const priceTotal = document.getElementById('totla-price');
    const parPrice = priceTotal.innerText;
    const parTotal = parseInt(parPrice);
    const setPartotal = setTotalPrice + parTotal;
    priceTotal.innerText = setPartotal;

}


document.getElementById('make').addEventListener('click', function () {
    location.href = "index.html"
})
