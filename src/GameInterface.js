function GameInterface(board1, board2) {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("container");

  const boards = document.createElement("div");
  boards.classList.add("boards");

  const status = document.createElement("div");
  status.classList.add("status");
  const board_one = document.createElement("div");
  board_one.classList.add("board_one");

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");
    for (let k = 0; k < 10; k++) {
      let col = document.createElement("div");
      col.classList.add("cols");

      col.textContent = board1[i][k];
      col.setAttribute("data-cell-index", `${[i, k]}`);
      row.appendChild(col);
    }
    board_one.appendChild(row);
  }

  const board_two = document.createElement("div");
  board_two.classList.add("board_two");

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("rows_two");
    for (let k = 0; k < 10; k++) {
      let col = document.createElement("div");
      col.classList.add("cols_two");

      //col.textContent = board2[i][k];
      col.setAttribute("data-cell-index", `${[i, k]}`);
      row.appendChild(col);
    }
    board_two.appendChild(row);
  }
  container.appendChild(status);
  boards.appendChild(board_one);
  boards.appendChild(board_two);
  container.appendChild(boards);

  if (body.childNodes.length === 0) {
    body.appendChild(container);
  } else {
    body.lastChild.remove();
    body.appendChild(container);
  }
}

export { GameInterface };
