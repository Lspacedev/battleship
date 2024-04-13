import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

describe("Ship factory", () => {
  test("Ship() should exist", () => {
    expect(Ship).toBeDefined();
  });
  const ship = Ship;

  describe("hit function", () => {
    test("hit() should exist", () => {
      expect(Ship.Ship().hit).toBeDefined();
    });
    test("increase hit but calling hit function", () => {
      let ship_one = ship();
      ship_one.hit();
      expect(ship_one.get_hits()).toEqual(1);

      ship_one.hit();
      expect(ship_one.get_hits()).toEqual(2);
    });
  });

  describe("isSunk function", () => {
    test("isSunk() should exist", () => {
      expect(Ship.Ship().isSunk).toBeDefined();
    });
    test("check if ship sunk", () => {
      let ship_two = ship(3);
      ship_two.hit();
      ship_two.hit();
      ship_two.hit();

      expect(ship_two.isSunk()).toBeTruthy();
    });
  });
});

describe("Gameboard factory", () => {
  test("Gameboard() should exist", () => {
    expect(Gameboard.Gameboard).toBeDefined();
  });

  describe("test recieve attack method", () => {
    test("recieveAttack() should exist", () => {
      expect(Gameboard.Gameboard().recieveAttack).toBeDefined();
    });
  });
});
