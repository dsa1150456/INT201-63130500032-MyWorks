const inputqty = document.getElementById('qty');
const input = document.getElementById('item');
const submit = document.getElementById('btn-submit');
const buyinglist = document.getElementById('buying-list');
const countPendingItems = document.getElementById('countPendingItems');
const countDoneItems = document.getElementById('countDoneItems');
const btnclear = document.getElementById('btn-clear');

submit.addEventListener("click", () => {
    addItem();
});

//1.2.1
function addItem() {
    if (input.value !== "") {
        let list = document.createElement("li");
        list.innerHTML = input.value + ", " + inputqty.value + " units";
        buyinglist.appendChild(list);
        countPendingItems.innerHTML++
        let pendingImgCte = document.createElement("img")
        pendingImgCte.id = "pending"
        pendingImgCte.src = "images/pending.svg";
        pendingImgCte.onclick = function () {
            if (pendingImgCte.parentNode.id != "done") {
                pendingImgCte.src = "images/done.svg"
                pendingImgCte.parentNode.id = "done"
                pendingImgCte.id = "done"
                countPendingItems.innerHTML -= 1
                countDoneItems.innerHTML++
            }
        };
        list.appendChild(pendingImgCte);
        addLocal(input.value, inputqty.value, pendingImgCte.id)
        input.value = "";
    } else {
        alert("ยังไม่ได้เขียนรายการที่ต้องการ")
    }
}

btnclear.addEventListener("click", () => {
    while (buyinglist.firstChild) {
        buyinglist.removeChild(buyinglist.lastChild);
    }
    countPendingItems.innerHTML = 0
    countDoneItems.innerHTML = 0
    alert("Empty list")
    localStorage.clear();
})


var addLocal = function (name, quantity, status) {
    var items = JSON.parse(localStorage.getItem('itemsInList')) || [];
    items.push({
        name,
        quantity,
        status
    })
    localStorage.setItem('itemsInList', JSON.stringify(items));
    console.log(items);
}

