const uploadMiddleware = require('./middleware/uploadMiddleware');
const express = require('express');
require('dotenv').config();
const methodOverride = require('method-override');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const upload = uploadMiddleware('images');


app.post('/upload', upload.single('image'), (req, res) => {
  //promise
    try{
        if(!req.file) {
            return res.status(400).json({message: 'Please upload a file'})
        }
        const imageUrl = req.file.path;
        console.log(imageUrl)
    }catch (error) {
        console.log(error)
    }
});


app.get('/', (req, res) => {
    res.send(`
    <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="image" />
    <button type="submit">Upload</button>
    </form>
    `);
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});