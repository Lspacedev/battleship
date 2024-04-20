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
  let playerTurn = true;
  let computerTurn = false;

  // player + computer boards

  function cellClick(e) {
    const cell = e.target;
    let bg = window.getComputedStyle(cell).getPropertyValue("background-color");

    function check() {
      if (bg) {
        cell.removeEventListener("click", cellClick);
      }
    }

    const coord = cell.getAttribute("data-cell-index");

    let playerMoveX = parseInt(coord[0]);
    let playerMoveY = parseInt(coord[2]);

    if (playerTurn) {
      ComputerBoard.recieveAttack(playerMoveX, playerMoveY);
      let board = ComputerBoard.get_board();
      if (board[playerMoveX][playerMoveY] === "x") {
        cell.style.backgroundColor = "#a8a8a8";
      } else if (board[playerMoveX][playerMoveY] === "O") {
        cell.style.backgroundColor = "#e2f5b8";
      } else {
        cell.textContent = board[playerMoveX][playerMoveY];
      }

      //check sunk status
      if (
        PlayerBoard.get_sunkStatus() === 5 ||
        ComputerBoard.get_sunkStatus() === 5
      ) {
        status.textContent = "Game Over! You Win!";
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
    check();
    cellClick2();
    //playerTurn = false;
  }

  function isArrayInArray(arr1, arr2) {
    var item = JSON.stringify(arr2);

    var contains = arr1.some(function (ele) {
      return JSON.stringify(ele) === item;
    });
    return contains;
  }

  function cellClick2() {
    const cols = document.querySelectorAll(".cols");

    let combinations = [];

    let computerMoveX = Math.floor(Math.random() * 10);
    let computerMoveY = Math.floor(Math.random() * 10);
    if (isArrayInArray(combinations, [computerMoveX, computerMoveY])) {
      computerMoveX = Math.floor(Math.random() * 10);
      computerMoveY = Math.floor(Math.random() * 10);
    } else {
      combinations.push([computerMoveX, computerMoveY]);
    }

    let index = parseInt(String(computerMoveX) + String(computerMoveY));

    let cell = cols[index];

    if (computerTurn) {
      PlayerBoard.recieveAttack(computerMoveX, computerMoveY);
      let board = PlayerBoard.get_board();

      if (
        board[computerMoveX][computerMoveY] === "x" &&
        cell.style.backgroundColor !== "#a8a8a8" &&
        cell.style.backgroundColor !== "#e2f5b8"
      ) {
        cell.style.backgroundColor = "#a8a8a8";
      } else if (
        board[computerMoveX][computerMoveY] === "O" &&
        cell.style.backgroundColor !== "#e2f5b8" &&
        cell.style.backgroundColor !== "#a8a8a8"
      ) {
        cell.style.backgroundColor = "#e2f5b8";
      }

      //check sunk status
      if (
        ComputerBoard.get_sunkStatus() === 5 ||
        PlayerBoard.get_sunkStatus() === 5
      ) {
        status.textContent = "Game Over! Computer Wins!";

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

  const status = document.querySelector(".status");

  function start() {
    document
      .querySelectorAll(".cols_two")
      .forEach((cell) => cell.addEventListener("click", cellClick));
  }

  // round
  status.addEventListener("click", start);
}

Game();
