import { Router } from "express";
import ShipController from "./controllers/ShipController";

const routes = Router();
const shipController = new ShipController();

routes.get("/ships", shipController.index);

export default routes;
