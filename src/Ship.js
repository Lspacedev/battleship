import { DragDrop } from "./DragDrop";

function Ship(len) {
  let length = len;
  let hits = 0;
  let sunk = false;

  const hit = () => hits++;
  const get_hits = () => hits;

  const isSunk = () => {
    if (hits === length) {
      sunk = true;
    }
    return sunk;
  };

  const get_sunk = () => sunk;

  return { length, get_hits, hit, get_sunk, isSunk };
}

export { Ship };
