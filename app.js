const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.listen(3000, () => console.log('Server running at http://localhost:3000'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});



//console.log(express)

