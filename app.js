const express = require("express");
var app = express();
app.use(express.static("public"));

var port = process.env.PORT || 4000;
var server = app.listen(port, function () {
    console.log("Server Start....");
})

app.get('/', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname + "index.html");
});
