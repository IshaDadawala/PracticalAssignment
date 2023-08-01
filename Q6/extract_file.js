var fs = require("fs");
var zlib = require('zlib');


fs.createReadStream('./files/text1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./files/text1.txt','utf-8'));
  
console.log("File Decompressed.");