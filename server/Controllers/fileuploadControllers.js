

const singleFileUpload = async (req,res,next) => {
    try{
        const file = req.file;
        console.log(file);
        const fileName = file.originalname;
        res.status(201).send("File Upload Succefully");
    }
    catch(err){
        res.status(400).send(err.message);
    }
}

module.exports = {
    singleFileUpload
}