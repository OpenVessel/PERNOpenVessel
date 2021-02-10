const router = require("express").Router();
const fetch = require("node-fetch");
const axios = require("axios");

router.get('/:apiEndpoint', async (req, res) => {
    try {
        const { apiEndpoint } = req.params;
        // get todo name and description for a specified user id
        const orthancRes = await axios.get(`http://localhost:8042/${apiEndpoint}`)
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