const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'Public')));


const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`);
});
