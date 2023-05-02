import { Router } from "express";
import gpsCoordinates from "../gpsCoordinates.js";

const router = Router();

router.get("/conversor/:dd", (req, res) => {
  const decimalCoordinades = req.params.dd;
  let splitter = decimalCoordinades.split(",");
  let lat = parseFloat(splitter[0]);
  let long = parseFloat(splitter[1]);
  const result = gpsCoordinates(lat, long);

 res.status(200).json(result)
});

export default router;
