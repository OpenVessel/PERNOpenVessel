const router = require("express").Router();
const fetch = require("node-fetch");
const axios = require("axios");

router.get('/:apiEndpoint', async (req, res) => {
    try {
        const { apiEndpoint } = req.params;

        const orthancPort = 8042
        const orthancRes = await axios.get(`http://localhost:${orthancPort}/${apiEndpoint}`)
        .then(res => {
            return res.data;
        })
    
        res.json(orthancRes);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Orthanc Server error");
      }
})

module.exports = router;