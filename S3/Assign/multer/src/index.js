const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

const PORT = 8000;

const app = express();
app.use(express.json());


app.post("/file", upload.single("avatar"),(req,res) => {
    res.send("File uploaded")
})


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})


