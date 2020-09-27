require('dotenv').config({ path: '/home/ubuntu/.env' });
express = require("express");
const app = express();
const port =  5000

app.get("/", function(req, res){
	res.status(200).send(`i love lover ${process.env.MSG}, ${process.env.HOPE}`);
});

app.listen(port,()=>{
	console.log(`i love lover ${process.env.MSG}, ${process.env.HOPE}, ${process.env.LOVE}`)
});