const axios = require('axios');
const fs = require('fs');
const path = require('path');
const figlet = require('figlet');
const clear = require('clear')
// username = your instagram username
// password = your instagram password
clear();
fs.readdirSync('./images').forEach(f=>{ fs.rmSync(`./images/${f}`)})
//fs.rmSync('./config/username_uuid_and_cookie.json')

console.log(figlet.textSync("  IWB UwU  ", { horizontalLayout: "full", whitespaceBreak: true,font:"Basic" }))
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter Image Id: ', inputId => {
 // console.log(`Hey there ${name}!`);
 axiosShit(inputId)
  readline.close();
});

var tutu = "uwu";
function axiosShit(inputId) {
axios
  .get(`https://wallhaven.cc/api/v1/w/${inputId}`)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data.data.path);
    fs.writeFileSync('./urls.txt',res.data.data.tags[0].name);
//    fs.writeFileSync('./names.txt',uwu.toString())
//    console.log(uwu)
    
    //downloadImage(res.data.data.path,res.data.data.id)
      downloadImage(res.data.data.path)
  })
  .catch(error => {
    console.error(error);
  });
}



async function downloadImage (imageurl) {  
  const url = imageurl
  const spath = path.resolve(__dirname, 'images', `uwu.jpeg`)
  const writer = fs.createWriteStream(spath)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}










