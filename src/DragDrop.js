/*
 */
function DragDrop() {
  const body = document.querySelector("body");
  const dock = document.createElement("div");
  dock.classList.add("dock");

  const carrier = document.createElement("div");
  carrier.classList.add("ships");
  carrier.setAttribute("id", "carrier");
  carrier.setAttribute("draggable", "true");

  const battleship = document.createElement("div");
  battleship.classList.add("ships");
  battleship.setAttribute("id", "battleship");
  battleship.setAttribute("draggable", "true");

  const cruiser = document.createElement("div");
  cruiser.classList.add("ships");
  cruiser.setAttribute("id", "cruiser");
  cruiser.setAttribute("draggable", "true");

  const submarine = document.createElement("div");
  submarine.classList.add("ships");
  submarine.setAttribute("id", "submarine");
  submarine.setAttribute("draggable", "true");

  const destroyer = document.createElement("div");
  destroyer.classList.add("ships");
  destroyer.setAttribute("id", "destroyer");
  destroyer.setAttribute("draggable", "true");

  dock.appendChild(carrier);
  dock.appendChild(battleship);
  dock.appendChild(cruiser);
  dock.appendChild(submarine);
  dock.appendChild(destroyer);
  body.appendChild(dock);

  //const grid = document.querySelector(".board_one;");

  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    //event.currentTarget.style.backgroundColor = "yellow";
  }
  carrier.addEventListener("dragstart", onDragStart);
  battleship.addEventListener("dragstart", onDragStart);
  cruiser.addEventListener("dragstart", onDragStart);
  submarine.addEventListener("dragstart", onDragStart);
  destroyer.addEventListener("dragstart", onDragStart);
}
export { DragDrop };
