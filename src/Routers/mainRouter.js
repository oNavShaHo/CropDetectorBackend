const express = require('express');
const multer = require('multer');
const router = express.Router();
const {lb}=require('../controllers/lb')

const storageEngine=multer.diskStorage({
  destination:"./images",
  filename:(req,file,cb)=>{
    cb(null, `${Date.now()}--${file.originalname}`);
  },
})

const upload = multer({
  storage: storageEngine,
});

router.get('/',(req,res)=>{
  res.send("Hello World")
})

router.post("/single", upload.single("image"), (req, res) => {
  if (req.file) {
    const imagePath = req.file.path;
    lb(imagePath);
   // console.log(`File uploaded successfully at ${imagePath}`);
    res.send("Single file uploaded successfully");
  } else {
    res.status(400).send("Please upload a valid image");
  }
});


module.exports = router;
