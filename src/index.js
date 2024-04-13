import _ from "lodash";
import "./style.css";

import { Gameboard } from "./Gameboard";
import { GameInterface } from "./GameInterface";
import { DragDrop } from "./DragDrop";
import { Drop } from "./Drop";

console.log();

function Player() {
  let score;
  return { score };
}

function Game() {
  let player = Player();
  let computer = Player();

  let computerMoveX = 1;
  let computerMoveY = 2;

  let playerTurn = true;
  let computerTurn = false;

  // player + computer boards

  const toggle = (stat) => {
    if (stat === true) {
      stat = false;
    } else if (stat === false) {
      stat = true;
    }
  };

  function cellClick(e) {
    const cell = e.target;
    const coord = cell.getAttribute("data-cell-index");

    let playerMoveX = parseInt(coord[0]);
    let playerMoveY = parseInt(coord[2]);

    if (playerTurn) {
      ComputerBoard.recieveAttack(playerMoveX, playerMoveY);
      let board = ComputerBoard.get_board();
      cell.textContent = board[playerMoveX][playerMoveY];
      console.log(cell);
      console.log("clicked-p");

      //check sunk status
      if (
        PlayerBoard.get_sunkStatus() === 5 ||
        ComputerBoard.get_sunkStatus() === 5
      ) {
        console.log("Game Over! You Win!");
        document
          .querySelectorAll(".cols_two")
          .forEach((cell) => cell.removeEventListener("click", cellClick));
        return;
      } else {
        playerTurn = false;
        computerTurn = true;
      }
    } else {
      return;
    }

    //playerTurn = false;
  }

  function cellClick2(e) {
    const cell = e.target;

    const coord = cell.getAttribute("data-cell-index");
    console.log(cell);
    let computerMoveX = parseInt(coord[0]);
    let computerMoveY = parseInt(coord[2]);
    if (computerTurn) {
      PlayerBoard.recieveAttack(computerMoveX, computerMoveY);
      let board = PlayerBoard.get_board();
      cell.textContent = board[computerMoveX][computerMoveY];

      console.log(cell);
      console.log(board);
      //check sunk statuss
      if (
        ComputerBoard.get_sunkStatus() === 5 ||
        PlayerBoard.get_sunkStatus() === 5
      ) {
        console.log("Game Over! Computer Wins!");
        document
          .querySelectorAll(".cols")
          .forEach((cell) => cell.removeEventListener("click", cellClick2));

        return;
      } else {
        computerTurn = false;
        playerTurn = true;
      }
    } else {
      return;
    }
  }

  //getInput();

  let PlayerBoard = Gameboard("P");
  let ComputerBoard = Gameboard("C");

  let board1 = PlayerBoard.get_board();
  let board2 = ComputerBoard.get_board();
  GameInterface(board1, board2);
  DragDrop();
  Drop(PlayerBoard);

  //GameInterface(PlayerBoard.get_board(), board2);
  //;

  let gameOver = false;

  console.log("==================");
  console.log(PlayerBoard.get_board());

  const status = document.querySelector(".status");

  function start() {
    document
      .querySelectorAll(".cols_two")
      .forEach((cell) => cell.addEventListener("click", cellClick));
    document.querySelectorAll(".cols").forEach((cell) => {
      cell.addEventListener("click", cellClick2);
    });
  }

  // round
  status.addEventListener("click", start);
}

Game();

console.log("I'm working here");
