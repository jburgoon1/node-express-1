const express = require('express');
const axios = require('axios');
var app = express();
app.use(express.json())


app.post('/', async function(req, res, next) {
  
  try {
    const peopleArr = []
    req.body.developers.forEach(async d => {
      console.log(d)
      
      let info = await axios.get(`https://api.github.com/users/${d}`);
      peopleArr.push({name: info.data.name, bio:info.data.bio})
      console.log(peopleArr)    
      if(peopleArr.length === req.body.developers.length){
        return res.send(peopleArr)
      }
      
    })  
    
    
  } catch(err) {
    next(err);
  }
});

app.listen(3000);
