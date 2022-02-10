const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/src', express.static('src'))

app.get('/', (req,res)=>{
    const skillList = require('./src/json/skills.json')
    res.render('index', {skillList});
})

app.listen(port, ()=>console.log(`listening on port ${port}`));