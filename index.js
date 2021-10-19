const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path')

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',async(req,res) =>{
    try {
        var json_data =[];
        const jsonsInDir = fs.readdirSync('./data').filter(file => path.extname(file) === '.json');
        jsonsInDir.forEach(file => {
            console.log(file);
            const fileData = fs.readFileSync(path.join('./data', file));
            const json = JSON.parse(fileData.toString());
            json_data.push(json);
            console.log(json)
        });
        
        res.status(200).send(json_data);
    } catch (error) {
        console.log(error);
        res.status(203).send("Error");
    }
   
})
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log("App is listening on url http://localhost:" + PORT))