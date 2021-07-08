const fs = require('fs')
const axios = require('axios')

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

function urls(path){
    path = process.argv[2]
    fs.readFile(path, 'utf8', function(err, data){
    if(err){
        console.log('oh no')
    }
    let the_urls=data.split('\n')
    const new_arr = the_urls.filter(u=>u)
   getInfo(new_arr)
    })
    
}
function getInfo(new_arr){
    new_arr.forEach(async (u) =>{
        console.log(u)
        
        let resp = await axios.get(u)
        let new_url = new URL(u)
        console.log(new_url)
        let hostname = new_url.hostname
        fs.writeFile(hostname, resp.data, 'utf8', (err)=>{
            if(err){
            console.log(err)
            }
        })
        console.log(resp.data)
    })
    

   
}
urls()