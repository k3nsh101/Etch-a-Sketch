const DEFAULT_NUM_SQUARES = 16;

const grid = document.querySelector(".grid");
const btn = document.querySelector(".grid_size");

btn.addEventListener("click", () => {
    let num_squares = prompt("Enter grid size (Maximum 100):");
    if (num_squares > 100){
        alert("Input larger than 100. Setting the grid size to 100.");
        num_squares = 100;
    }

    let size = calculate_cell_dimension(num_squares);
    delete_grid();
    setup_grid(num_squares, size);
});


// Initial load
size = calculate_cell_dimension(DEFAULT_NUM_SQUARES);
setup_grid(DEFAULT_NUM_SQUARES, size);


function setup_grid(num_squares, size){
    //create a row in the grid
    for (let row = 0; row < num_squares; row++){
        const grid_row = document.createElement("div")
        grid_row.classList.add("grid_row");
        grid.appendChild(grid_row); 

        for (let column = 0; column < num_squares; column++){
            // create a cell in the grid
            const grid_cell = document.createElement("div");

            grid_cell.classList.add("grid_cell");
            grid_cell.addEventListener("mouseenter", () => grid_cell.classList.add("mouse_enter"))

            grid_cell.style.setProperty('width', size);
            grid_cell.style.setProperty('height', size);

            grid_row.appendChild(grid_cell);
        }
    }
}

function delete_grid(){
    document.querySelectorAll(".grid_cell").forEach(cell => cell.remove())
}

function calculate_cell_dimension(num_squares){
    const dimension = getComputedStyle(grid).width.replace(/\D/g, '') / num_squares;
    return `${dimension}px`;
}

