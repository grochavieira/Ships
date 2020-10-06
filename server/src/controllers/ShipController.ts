import { Request, Response } from "express";

class ShipController {
  async index(request: Request, response: Response) {
    response.json({ ok: "ok" });
  }
}

export default ShipController;
