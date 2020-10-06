import { IShip } from "../interfaces/IShipInterface";

export default function filterShips(ships: Array<IShip>) {
  const filteredShips = ships.filter((ship: IShip) => ship.active);

  return filteredShips;
}
