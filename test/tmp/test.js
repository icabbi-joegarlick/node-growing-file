var GrowingFile = require("../../lib/growing_file.js");

var file = GrowingFile.open(
  "/Users/joegarlick/Desktop/node1-1585576324.84.wav",
  {
    timeout: 5000,
    interval: 100
  }
);
file.on("end", function() {
  console.log("file.end");
});

file.close();
