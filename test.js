var fs = require('fs');
var path = require('path');
var download = require('download')  


const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []
  
  files.forEach(function(file) {
    var newbase = path.join(dirPath,file);
    console.log(newbase);
    console.log(fs.statSync(dirPath + "/" + file).isDirectory())
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(newbase)
    }
  })

  return arrayOfFiles
}

var fafu = getAllFiles('./deletefiles')
console.log(fafu);
var totalSize = 0;
fafu.forEach(function(filePath) {
    totalSize += fs.statSync(filePath).size
  })


console.log(totalSize)
//fs.mkdirSync('./deletefiles/sastha');
// var data = 'i did it bro'
// fs.writeFileSync('./deletefiles/sastha/index.txt',data);
// console.log(fs.readFileSync('./deletefiles/sastha/index.txt'));
// fs.rmdir('./deletefiles/sastha',function (err){
//     console.log(err);
// });

//for further information  https://nodejs.dev/learn/the-nodejs-path-module

console.log(path.isAbsolute('./uploadmany/bala.jpg'))
var path1 = path.normalize('../upload_master/dlete.txt');
console.log(path1)
console.log(fs.readFileSync('./uploadmany/bala.jpg'))