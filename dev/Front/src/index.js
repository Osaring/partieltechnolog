var express= require("express");
var app = express();
const port = 8080


app.listen(port, function () {
    return console.log("server is listening on " + 8080);
});