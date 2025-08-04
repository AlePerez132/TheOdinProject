const clear = document.getElementById("clear");
const resize = document.getElementById("resize");
const screen = document.getElementById("screen");

let gridSize = 16;

function createGrid(size) {
    screen.innerHTML = "";
    screen.style.gridTemplateColumns = `repeat(${size}, auto)`;
    screen.style.gridTemplateRows = `repeat(${size}, auto)`;
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.style.backgroundColor = "white";
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = "black";
        });
        screen.appendChild(gridItem);
        gridItem.setAttribute("id", "screen-item");
    }
}

resize.addEventListener("click", () => {
    gridSize = parseInt(prompt("Enter the new grid size (between 1 and 100):", gridSize));
    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        alert("Please enter a valid number between 1 and 100.");
    }
    else{
        clear.click();
        createGrid(gridSize);
    }
});

clear.addEventListener("click", () => {
    const items = document.querySelectorAll("#screen-item");
    items.forEach(item => {
        item.style.backgroundColor = "white";
    });
})


createGrid(gridSize);
