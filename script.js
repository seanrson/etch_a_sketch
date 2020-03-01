const container = document.createElement("div")
container.classList.add("container");
container.setAttribute("id", "container");
document.body.appendChild(container);

function addCells()
{
    for (i=0; i<numCells; i++)
    {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.setAttribute("id", `cell${i}`);
        container.appendChild(newCell);
    }
}

function highlight(e)
{
    e.target.classList.add("hovered");
}

function deleteCells()
{
    cells.forEach(cell => container.removeChild(cell));
}

function newGrid() // clears screen, creates new grid with selected number of cells per row/col
{
    cells = Array.from(document.querySelectorAll(".cell")); // delete previous cells
    deleteCells();
    numCells = prompt("How many cells per row/column do you want?") ** 2;
    addCells(numCells); // add new cells
    cells = Array.from(document.querySelectorAll(".cell")); // add event listener for new cells
    cells.forEach(cell => cell.addEventListener("mouseover", highlight))
}

// initial settings
let numCells = 256;
addCells(16); // begin with 16x16 grid
let cells = Array.from(document.querySelectorAll(".cell"));
cells.forEach(cell => cell.addEventListener("mouseover", highlight));
//

// user-selected settings
const button = document.querySelector("#reset");
button.addEventListener("click", newGrid);
//