const container = document.createElement("div")
container.classList.add("container");
container.setAttribute("id", "container");
document.body.appendChild(container);

function addCells(numCells)
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
    cellsPerRowCol = prompt("How many cells per row/column do you want?");
    console.log(cellsPerRowCol);
    numCells = cellsPerRowCol**2;
    elem.setAttribute("style", `grid-template-rows: repeat(${cellsPerRowCol}, 1fr); grid-template-columns: repeat(${cellsPerRowCol}, 1fr)`);// resize grid
    addCells(numCells); // add new cells
    cells = Array.from(document.querySelectorAll(".cell")); // add event listener for new cells
    cells.forEach(cell => cell.addEventListener("mouseover", highlight))
}

// initial settings
let elem = document.getElementById("container");
let cellsPerRowCol = 16;
elem.setAttribute("style", "grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr)");
var cells;
let numCells = 256;

addCells(numCells); // begin with 16x16 grid
cells = Array.from(document.querySelectorAll(".cell"));
cells.forEach(cell => cell.addEventListener("mouseover", highlight));
//

// user-selected settings
const button = document.querySelector("#reset");
button.addEventListener("click", newGrid);