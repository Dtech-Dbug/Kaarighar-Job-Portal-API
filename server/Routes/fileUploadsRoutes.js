
const express = require('express');
const {upload} = require('../Helper/fileupload');
const {singleFileUpload} = require('../Controllers/fileuploadControllers');
const router = express.Router();

router.post('/singlefile', upload.single('file'), singleFileUpload);

module.exports = {
    routes: router
}