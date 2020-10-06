import { IShip } from "../interfaces/IShipInterface";
import converter from "json-2-csv";

export default function convertToCSV(ships: Array<IShip>) {
  let shipsCSV;
  converter.json2csv(ships, (err, csv) => {
    if (err) {
      throw err;
    }
    shipsCSV = csv;
    console.log(shipsCSV);
    return csv;
  });

  return shipsCSV;
}
