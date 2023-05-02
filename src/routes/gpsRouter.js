import { Router } from "express";
import gpsService from "../services/gpsService.js";

const router = Router();

router.get("/conversor/:dd", (req, res) => {
  const decimalCoordinades = req.params.dd;
  const result = gpsService(decimalCoordinades);

  res.status(200).json(result);
});

export default router;
