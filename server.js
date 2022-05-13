const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 3001;

app.use('',express.static(path.join(__dirname,'dist','race-ui')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist','race-ui','index.html'));


});

app.listen(port,()=>{
    console.log('app is runing in port '+ port);
})