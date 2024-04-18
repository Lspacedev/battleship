import { drop } from "lodash";

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

  const cols = document.querySelectorAll(".cols");

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    const id = event.dataTransfer.getData("text");

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    let coords = dropzone.getAttribute("data-cell-index");
    if (coords) {
      let index = parseInt(coords[0] + coords[2]);
      let X = parseInt(coords[0]);
      let Y = parseInt(coords[2]);

      if (dropzone.childNodes.length === 0) {
        dropzone.classList.add("occupied");
      }

      const dock = document.querySelector(".dock");
      const carrier = document.querySelector("#carrier");
      const battleship = document.querySelector("#battleship");
      const cruiser = document.querySelector("#cruiser");
      const submarine = document.querySelector("#submarine");
      const destroyer = document.querySelector("#destroyer");

      if (id === "carrier" && Y >= 6) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (id === "battleship" && Y >= 7) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (id === "cruiser" && Y >= 8) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(cruiser)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (id === "submarine" && Y >= 8) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(submarine)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (id === "destroyer" && Y >= 9) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(destroyer)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (
        (id === "carrier" && cols[index + 1].hasAttribute("id")) ||
        (id === "carrier" && cols[index + 2].hasAttribute("id")) ||
        (id === "carrier" && cols[index + 3].hasAttribute("id")) ||
        (id === "carrier" && cols[index + 4].hasAttribute("id"))
      ) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (
        (id === "battleship" && cols[index + 1].hasAttribute("id")) ||
        (id === "battleship" && cols[index + 2].hasAttribute("id")) ||
        (id === "battleship" && cols[index + 3].hasAttribute("id"))
      ) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (
        (id === "cruiser" && cols[index + 1].hasAttribute("id")) ||
        (id === "cruiser" && cols[index + 2].hasAttribute("id"))
      ) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (
        (id === "submarine" && cols[index + 1].hasAttribute("id")) ||
        (id === "submarine" && cols[index + 2].hasAttribute("id"))
      ) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else if (id === "destroyer" && cols[index + 1].hasAttribute("id")) {
        draggableElement.setAttribute("draggable", "false");
        if (dock.contains(carrier)) {
          draggableElement.setAttribute("draggable", "true");
        }
      } else {
        if (id === "carrier") {
          const col1 = document.createElement("div");

          const col2 = document.createElement("div");

          const col3 = document.createElement("div");

          const col4 = document.createElement("div");

          cols[index + 1].appendChild(col1);
          cols[index + 2].appendChild(col2);
          cols[index + 3].appendChild(col3);
          cols[index + 4].appendChild(col4);
          cols[index + 1].classList.add("carrier-block");
          cols[index + 2].classList.add("carrier-block");
          cols[index + 3].classList.add("carrier-block");
          cols[index + 4].classList.add("carrier-block");
          console.log(!cols[index + 1].hasAttribute("id"));
        } else if (id === "battleship") {
          const col1 = document.createElement("div");

          const col2 = document.createElement("div");

          const col3 = document.createElement("div");

          cols[index + 1].appendChild(col1);
          cols[index + 2].appendChild(col2);
          cols[index + 3].appendChild(col3);
          cols[index + 1].classList.add("battleship-block");
          cols[index + 2].classList.add("battleship-block");
          cols[index + 3].classList.add("battleship-block");
        } else if (id === "cruiser") {
          const col1 = document.createElement("div");
          const col2 = document.createElement("div");

          cols[index + 1].appendChild(col1);
          cols[index + 2].appendChild(col2);
          cols[index + 1].classList.add("cruiser-block");
          cols[index + 2].classList.add("cruiser-block");
        } else if (id === "submarine") {
          const col1 = document.createElement("div");
          const col2 = document.createElement("div");

          cols[index + 1].appendChild(col1);
          cols[index + 2].appendChild(col2);
          cols[index + 1].classList.add("submarine-block");
          cols[index + 2].classList.add("submarine-block");
        } else if (id === "destroyer") {
          const col1 = document.createElement("div");

          cols[index + 1].appendChild(col1);
          cols[index + 1].classList.add("destroyer-block");
        }

        if (dropzone.classList.contains("occupied")) {
          draggableElement.removeAttribute("class");
          draggableElement.removeAttribute("id");
          //draggableElement.removeAttribute("draggable");
          dropzone.appendChild(draggableElement);

          if (id === "carrier") {
            //draggableElement.removeAttribute("draggable");

            //dropzone.appendChild(draggableElement);
            dropzone.classList.remove("occupied");
            dropzone.setAttribute("id", "carrier");
            event.dataTransfer.clearData();
          } else if (id === "battleship") {
            //dropzone.appendChild(draggableElement);
            dropzone.classList.remove("occupied");
            dropzone.setAttribute("id", "battleship");
            event.dataTransfer.clearData();
          } else if (id === "cruiser") {
            //dropzone.appendChild(draggableElement);
            dropzone.classList.remove("occupied");
            dropzone.setAttribute("id", "cruiser");
            event.dataTransfer.clearData();
          } else if (id === "submarine") {
            //dropzone.appendChild(draggableElement);
            dropzone.classList.remove("occupied");
            dropzone.setAttribute("id", "submarine");
            event.dataTransfer.clearData();
          } else if (id === "destroyer") {
            //dropzone.appendChild(draggableElement);
            dropzone.classList.remove("occupied");
            dropzone.setAttribute("id", "destroyer");
            event.dataTransfer.clearData();
          }
        }

        board.placeCoord(id, X, Y);
      }
    }

    if (isBoardPlaced(board.get_board()) === 4) {
      document.querySelector(".status").textContent = "Start";
    }
  }

  cols.forEach((col) => {
    col.addEventListener("dragover", onDragOver);
    col.addEventListener("drop", onDrop);
    console.log(col);
  });
}

export { Drop };
