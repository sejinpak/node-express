const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('서버온')
})
app.get('/search/:name/:code',(req,res)=>{
    let { name,code } = req.params;
    fetch('https://open.neis.go.kr/hub/schoolInfo?KEY=49dccbb15f414852936a5870bd0a0545&Type=json&SCHUL_NM='+name+'&ATPT_OFCDC_SC_CODE='+code).then((response) => response.json())//읽어온 데이터를 json으로 변환
    .then((json) => {
        res.json(json)
    });
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname+'/notfind.html')
});
