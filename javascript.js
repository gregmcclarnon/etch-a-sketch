function createGrid() {

    let flexContainer = document.getElementById('container');

    for (let i = 0; i < 256; i++) {
        flexContainer.innerHTML += `<div class="grid-item"></div>`;
    }

}

createGrid();

// Listens for mouse over and adds class .touch to the grid item

document.querySelectorAll('.grid-item').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.classList.add('touch');
    });
});


