import { Request, Response } from "express";
import api from "../services/api";
import filterShips from "../utils/filterShips";
import converter from "json-2-csv";

class ShipController {
  async index(request: Request, response: Response) {
    try {
      const query = `
      {
        launchesPast {
          mission_name
          ships {
            name
            active
          }
        }
      }
    `;
      const { data } = await api.post("/", { query });

      const activeShips = filterShips(data.data.launchesPast);

      converter.json2csv(activeShips, (err, csv) => {
        if (err) {
          throw err;
        }
        response.json(csv);
      });
    } catch (e) {
      response
        .status(400)
        .json({ error: "Não foi possível realizar a requisição" });
    }
  }
}

export default ShipController;
