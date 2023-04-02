const fs = require("fs");
const readStream = fs.createReadStream("./docs/file2.txt");
const writeStream = fs.createWriteStream("./docs/file3.txt");

// readStream.on("data", (chunk) => {
//   console.log("It is new chunk");
//   console.log(chunk);
//   writeStream.write("\n new chunk\n");
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream)