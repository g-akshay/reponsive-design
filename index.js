// DATA
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// DOCUMENT READY
(function () {
    // CREATE LIST ITEMS
    createListItems(data);

    // SHUFFLE BUTTON LISTENER
    const shuffleButton = document.querySelector(".shuffle");
    shuffleButton.addEventListener("click", () => {
        const listContainer = document.querySelector(".list-container");
        for (let i = 0; i < data.length; i++) {
            listContainer.appendChild(listContainer.children[Math.random() * i | 0]);
        }
    });

    // SORT BUTTON LISTENER
    const sortButton = document.querySelector(".sort");
    sortButton.addEventListener("click", () => {
        createListItems(data);
    });
})();

// UTILITY
function createListItems(data) {
    const listContainer = document.querySelector(".list-container");
    listContainer.innerHTML = "";
    data.forEach(item => listContainer.appendChild(createListItem(item)));
}

function createListItem(listText = "") {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(listText));
    li.classList.add("list-item", `_${listText}`);
    return li;
}
