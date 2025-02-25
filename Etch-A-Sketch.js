let myGrid = document.querySelector("#grid-container");
let newGridButton = document.querySelector("#newGrid");

function createGrid(number) {
  for (let i = 0; i < number; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    myGrid.appendChild(row);
    console.log("Row appended");

    for(let y = 0; y < number; y++){
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      console.log("column appended to row");

      column.addEventListener("mouseover", () => {
        let currentOpacity = parseFloat(column.style.opacity || 1);
        currentOpacity -= 0.1;
        
        if (currentOpacity <= 0) {
          opacity = 0;
        }
        column.style.backgroundColor = "blue";
        column.style.opacity = currentOpacity.toString();
      })

      column.addEventListener("mouseout", () => {
        column.style.backgroundColor = "red";
      })
    }
  }
  }

  function createNewGrid() {
    let number = prompt("Please enter a number between 1 - 100");
    number = parseInt(number);
    myGrid.innerHTML = "";
    createGrid(number);

    if(number > 100 || number < 1){
      alert("Your number isn't between 1 - 100!");
      return createGrid(16);
    }
  }
  
  newGridButton.addEventListener("click", () => {
    createNewGrid();
    console.log("New grid created")
  });

createGrid(16);


