import { IMission, IShip } from "../interfaces/IShipInterface";

export default function filterShips(missions: Array<IMission>) {
  const convertedShips: Array<object> = [];
  missions.map((mission: IMission) => {
    const { mission_name } = mission;
    if (mission.ships.length > 0) {
      mission.ships.map((ship: IShip) => {
        if (ship) {
          if (ship.active) {
            const object = {
              mission_name,
              ship: ship.name,
            };
            convertedShips.push(object);
          }
        }
      });
    }
  });

  return convertedShips;
}
