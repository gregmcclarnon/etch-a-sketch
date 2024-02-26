function createGrid(sides) {

    let flexContainer = document.getElementById('container');

    flexContainer.innerHTML = '';

    let sideSize = 640 / sides;

    sideSize += "px"

    for (let i = 0; i < sides*sides; i++) {
        flexContainer.innerHTML += `<div class="grid-item" style="width: ${sideSize}; height: ${sideSize}; border: 1px solid #000;"></div>`;
    }

}

function addMouseOverListeners() {
    // Listens for mouse over and adds class .touch to the grid item
    document.querySelectorAll('.grid-item').forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.classList.add('touch');
        });
    });
    
    }



createGrid(16);
addMouseOverListeners();





function reDrawGrid() {
    sides = prompt("How many squares would you like on each side?")

    createGrid(sides);
    addMouseOverListeners();




}
