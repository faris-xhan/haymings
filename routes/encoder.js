const HammingCode = require('../services/HammingCode');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const { data, parity } = req.query;

  try {
    if (!data) {
      return res.status(422).json({
        error: 'Data fields can not be empty',
      });
    } else if (data.search(/[^10]+/g) > -1) {
      return res.status(422).json({
        error: 'Invalid data, data must not contain anything other than 1 or 0',
      });
    }

    const dataBits = data.split('').map((bit) => parseInt(bit));
    const hammingCode = await HammingCode.encode(dataBits, parity);
    return res.json(hammingCode);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
