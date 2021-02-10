const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());
app.options('*', cors()) // enable pre-flight
//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/orthanc", require("./routes/orthanc"));

const orthancPort = 80

app.listen(orthancPort, function () {
  console.log(`CORS-enabled web server listening on port ${orthancPort}`)
})
