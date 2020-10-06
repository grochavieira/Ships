import { Request, Response } from "express";
import api from "../services/api";
import filterShips from "../utils/filterShips";

class ShipController {
  async index(request: Request, response: Response) {
    try {
      const query = `
        {
          ships {
            active
            missions {
              name
            }
            name
          }
        }
        `;
      const { data } = await api.post("/", { query });

      const activeShips = filterShips(data.data.ships);
      console.log(activeShips);

      response.json(activeShips);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ShipController;
