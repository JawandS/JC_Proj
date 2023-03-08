const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send('hi this is live');
})

app.listen(2418,"0.0.0.0")
