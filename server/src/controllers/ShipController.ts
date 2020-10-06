import { Request, Response } from "express";
import api from "../services/api";

class ShipController {
  async index(request: Request, response: Response) {
    try {
      const query = `
        {
          ships {
            active
            missions {
              name
              flight
            }
            name
          }
        }
        `;
      const { data } = await api.post("/", { query });

      response.json(data);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ShipController;
