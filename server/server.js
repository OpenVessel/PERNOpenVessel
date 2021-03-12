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

const serverPort = 5000

app.listen(serverPort, function () {
  console.log(`CORS-enabled web server listening on port ${serverPort}`)
})


const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {

    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
