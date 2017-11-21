var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get("/", function(req, res) {
  console.log("served");
  res.sendFile("index.html");
});

io.on("connection", function(socket) {
  console.log(socket.id + " connected");

  socket.on("data", data => {
    for (var i = 0, a = 0; i < data.length; i += 2) {
      if (isNaN(parseInt(data[i + 1].value))) {
        a = a + parseInt(data[i].value) * 0;
      } else {
        a = a + parseInt(data[i].value) * parseInt(data[i + 1].value);
      }
    }
    console.log(a);
    socket.emit("result", a);
  });

  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
  });
});

http.listen(3000, () => {
  console.log("localhost:#3000");
});
