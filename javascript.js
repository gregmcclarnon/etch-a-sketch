function createGrid() {

    let flexContainer = document.getElementById('container');

    for (let i = 0; i < 256; i++) {

        flexContainer.innerHTML += `<div class ="grid-item"></div>`;


    }

    

}


createGrid();