import { Router } from "express";
import { DSAController } from "../controllers/DSAcontroller.mjs";
import { DSAservice } from "../services/DSAservice.mjs";

const controller = new DSAController(new DSAservice());
const service = new DSAservice(controller);

const router = Router();

router.route('/').get((req, res) => {
    controller.getDSAList(req, res);
});

export default router