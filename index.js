const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/src', express.static('src'))

app.get('/', (req,res)=>{
    res.render('index', require('./src/json/main.json'));
})

app.listen(port, ()=>console.log(`listening on port ${port}`));