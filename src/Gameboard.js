import { Ship } from "./Ship";

function Gameboard(l) {
  function placeCoord(id, X, Y) {
    console.log(id + X + Y);
    if (id === "carrier") {
      for (let k = 0; k < 5; k++) {
        board[X][k + Y] = "c";
      }
    } else if (id === "battleship") {
      for (let k = 0; k < 4; k++) {
        board[X][k + Y] = "b";
      }
    } else if (id === "cruiser") {
      for (let k = 0; k < 3; k++) {
        board[X][k + Y] = "cr";
      }
    } else if (id === "submarine") {
      for (let k = 0; k < 3; k++) {
        board[X][k + Y] = "s";
      }
    } else if (id === "destroyer") {
      for (let k = 0; k < 2; k++) {
        board[X][k + Y] = "d";
      }
    }
  }

  function computerPlaceCoord() {
    let i = 0;

    shipsArr.forEach((shipInfo) => {
      let len = shipInfo[0].length;

      for (let j = 0; j < len; j++) {
        board[i][j] = shipInfo[1];
      }
      i = i + 2;
    });
  }
  //get coordinates

  //initialise board
  let board = [];
  let rows = 10;
  let cols = 10;
  // 0 for initial , letter for ship, m for missed

  for (let i = 0; i < rows; i++) {
    board.push([""]);
    for (let j = 0; j < cols; j++) {
      board[i][j] = "";
    }
  }

  // create ships
  let carrier = Ship(5);
  let battleship = Ship(4);
  let cruiser = Ship(3);
  let submarine = Ship(3);
  let destroyer = Ship(2);

  //push ship with id
  let shipsArr = [];
  shipsArr.push([carrier, "c"]);
  shipsArr.push([battleship, "b"]);
  shipsArr.push([cruiser, "cr"]);
  shipsArr.push([submarine, "s"]);
  shipsArr.push([destroyer, "d"]);

  //place ships on board;
  if (l === "C") {
    computerPlaceCoord();
  }

  //track number of ships sunk

  let ships_sunk = 0;

  const track_sunk = (ship) => {
    if (ship.isSunk()) {
      ships_sunk++;
    }
  };

  const get_sunkStatus = () => ships_sunk;

  const recieveAttack = (x, y) => {
    if (board[x][y] === "c") {
      board[x][y] = "x";
      carrier.hit();
      track_sunk(carrier);
    } else if (board[x][y] === "b") {
      board[x][y] = "x";
      battleship.hit();
      track_sunk(battleship);
    } else if (board[x][y] === "cr") {
      board[x][y] = "x";
      cruiser.hit();
      track_sunk(cruiser);
    } else if (board[x][y] === "s") {
      board[x][y] = "x";
      submarine.hit();
      track_sunk(submarine);
    } else if (board[x][y] === "d") {
      board[x][y] = "x";
      destroyer.hit();
      track_sunk(destroyer);
    } else if (board[x][y] === "") {
      board[x][y] = "O";
    }
  };
  const get_board = () => board;
  const get_arr = () => shipsArr;

  return { get_arr, placeCoord, get_board, get_sunkStatus, recieveAttack };
}

export { Gameboard };
