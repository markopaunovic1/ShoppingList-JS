const checkBox = document.getElementById('checkBox');
const showItem = document.getElementById('currentItem');
const showAmount = document.getElementById('currentAmount');

const addItem = document.getElementById('addItem');
const addAmount = document.getElementById('addAmount');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
    putItemToList();
    resetText();
})

function putItemToList() {

    let theList = document.createElement('p');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    theList.innerHTML = addAmount.value + "st " + addItem.value;
    theList.classList.add('showItemWithCheckbox');
    theList.style.display = 'block';

    console.log(theList);

    let numbers = /^[0-9]+$/;
    let letters = /^[A-Za-z]+$/;

    if (theList.innerText === "") {
        alert("Please enter an item to your shopping list!");
        console.log(addItem.value);

    } else if (numbers.test(addItem.value)) {
        alert("Please enter amount bellow item input!");

    } else if (addItem.value === "" || addAmount.value === "") {
        alert("Please enter an item and amount!"); 

    } else {
        showItem.appendChild(theList);
        showItem.appendChild(checkbox);
    }
}

function resetText() {
    addItem.value = '';
    addAmount.value = '';
}

addItem.addEventListener("input", () => {
    let inputValue = addItem.value;
    addItem.value = inputValue.replace(/[^A-Za-z]+/g, '');
});