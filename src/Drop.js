function Drop(board) {
  function isBoardPlaced(array) {
    let count = 0;
    for (let r = 0; r < array.length; r++) {
      if (array[r].includes("c")) {
        count++;
      } else if (array[r].includes("b")) {
        count++;
      } else if (array[r].includes("cr")) {
        count++;
      } else if (array[r].includes("s")) {
        count++;
      } else if (array[r].includes("d")) {
        count++;
      }
    }
    return count;
  }

  const rows = document.querySelectorAll(".cols");
  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(dropzone);
    console.log(id);

    let coords = dropzone.getAttribute("data-cell-index");
    let X = parseInt(coords[0]);
    let Y = parseInt(coords[2]);
    console.log("[[[[[[[[[[[[[[[[[[[[[");
    console.log(draggableElement);
    console.log(coords);

    console.log("[[[[[[[[[[[[[[[[[[[[[");
    //draggableElement.setAttribute("data-cell-index", coords);
    if (id === "carrier") {
      const col1 = document.createElement("div");
      col1.setAttribute("data-cell-index", coords);
      const col2 = document.createElement("div");
      col2.setAttribute("data-cell-index", coords);
      const col3 = document.createElement("div");
      col3.setAttribute("data-cell-index", coords);

      const col4 = document.createElement("div");
      col4.setAttribute("data-cell-index", coords);

      const col5 = document.createElement("div");
      col5.setAttribute("data-cell-index", coords);

      draggableElement.appendChild(col1);
      draggableElement.appendChild(col2);
      draggableElement.appendChild(col3);
      draggableElement.appendChild(col4);
      draggableElement.appendChild(col5);
    } else if (id === "battleship") {
      const col1 = document.createElement("div");
      col1.setAttribute("data-cell-index", coords);
      const col2 = document.createElement("div");
      col2.setAttribute("data-cell-index", coords);
      const col3 = document.createElement("div");
      col3.setAttribute("data-cell-index", coords);

      const col4 = document.createElement("div");
      col4.setAttribute("data-cell-index", coords);

      draggableElement.appendChild(col1);
      draggableElement.appendChild(col2);
      draggableElement.appendChild(col3);
      draggableElement.appendChild(col4);
    } else if (id === "cruiser") {
      const col1 = document.createElement("div");
      col1.setAttribute("data-cell-index", coords);
      const col2 = document.createElement("div");
      col2.setAttribute("data-cell-index", coords);
      const col3 = document.createElement("div");
      col3.setAttribute("data-cell-index", coords);

      draggableElement.appendChild(col1);
      draggableElement.appendChild(col2);
      draggableElement.appendChild(col3);
    } else if (id === "submarine") {
      const col1 = document.createElement("div");
      col1.setAttribute("data-cell-index", coords);
      const col2 = document.createElement("div");
      col2.setAttribute("data-cell-index", coords);
      const col3 = document.createElement("div");
      col3.setAttribute("data-cell-index", coords);

      draggableElement.appendChild(col1);
      draggableElement.appendChild(col2);
      draggableElement.appendChild(col3);
    } else if (id === "destroyer") {
      const col1 = document.createElement("div");
      col1.setAttribute("data-cell-index", coords);
      const col2 = document.createElement("div");
      col2.setAttribute("data-cell-index", coords);

      draggableElement.appendChild(col1);
      draggableElement.appendChild(col2);
    }

    dropzone.appendChild(draggableElement);
    board.placeCoord(id, X, Y);
    console.log(board.get_board());

    event.dataTransfer.clearData();
    if (isBoardPlaced(board.get_board()) === 4) {
      document.querySelector(".status").textContent = "Start";
    }
  }

  rows.forEach((row) => {
    row.addEventListener("dragover", onDragOver);
    row.addEventListener("drop", onDrop);
  });
}

export { Drop };
