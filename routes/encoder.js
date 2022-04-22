const HammingCode = require('../services/HammingCode');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const { data } = req.query;

  try {
    if (data.search(/[^10]+/g) > -1) {
      return res.status(422).json({
        error: 'Invalid data, data must not contain anything other than 1 or 0',
      });
    }

    const hammingCode = await HammingCode.encode(dataBits);
    return res.json(hammingCode);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
