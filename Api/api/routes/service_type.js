const express = require('express');
const router = express.Router();

const ServiceTypeController = require('../controller/service_type');

router.post("/add", ServiceTypeController.add);

router.get("/", ServiceTypeController.get_all);

router.get("/:stId", ServiceTypeController.get_one);

router.patch("/:stId", ServiceTypeController.update);

router.delete("/:stId", ServiceTypeController.delete);

module.exports = router;