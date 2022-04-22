const HammingCode = require('../services/HammingCode');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const { data } = req.query;
  const dataBits = data.split('').map((bit) => parseInt(bit));
  const hammingCode = await HammingCode.encode(dataBits);

  return res.json(hammingCode);
});

module.exports = router;
