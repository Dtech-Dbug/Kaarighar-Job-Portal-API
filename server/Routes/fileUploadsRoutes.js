const express = require("express");
const { upload } = require("../Helper/fileupload");
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles}= require("../Controllers/fileuploadControllers");
const router = express.Router();

router.post("/singlefile", upload.single("file"), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);
module.exports = router;
