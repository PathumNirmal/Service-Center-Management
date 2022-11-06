const express = require('express');
const router = express.Router();

const ServicePartController = require('../controller/service_parts');

router.post("/add", ServicePartController.add);

router.get("/", ServicePartController.get_all);

router.get("/:spId", ServicePartController.get_one);

router.patch("/:spId", ServicePartController.update);

router.delete("/:spId", ServicePartController.delete);

module.exports = router;