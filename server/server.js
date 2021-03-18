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
// orthanc
const serverPort = 5000
// Postgres
const serverPostPort = 6000
// 5432
app.listen(serverPort, function () {
  console.log(`CORS-enabled web server listening on port ${serverPort}`)
})
app.listen(serverPostPort, () => { 
console.log(`PostgresSQL is listening on port ${serverPostPort}`)
} );


// const express = require('express');
const fileUpload = require('express-fileupload');

// const app = express();

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

// -----------------------(before 3/17/2021)----------------
// const express = require("express");
// const app = express();
// const cors = require("cors");

// //middleware

// app.use(cors());
// app.use(express.json());
// app.options('*', cors()) // enable pre-flight
// //routes

// app.use("/authentication", require("./routes/jwtAuth"));

// app.use("/orthanc", require("./routes/orthanc"));

// const serverPort = 6000

// app.listen(serverPort, function () {
//   console.log(`CORS-enabled web server listening on port ${serverPort}`)
// })


// const fileUpload = require('express-fileupload');

// app.use(fileUpload());

// // Upload Endpoint
// app.post('/upload', (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
//   }

//   const file = req.files.file;

//   file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {

//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

// app.listen(6000, () => console.log('Server Started...'));
