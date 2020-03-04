const express = require('express'); 
const path = require('path'); 
const PORT = process.env.PORT || 9090;
const app = express(); 
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books");

app.listen(PORT, ()=> {
    console.log('API server now on port ' + PORT);
});