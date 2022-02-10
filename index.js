require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const mail = require('./modules/mail');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use('/src', express.static('src'))

app.get('/', (req,res)=>{
    const formSubmitted = req.query.formSubmitted
    const datas = require('./src/json/main.json')
    res.render('index', {...datas, formSubmitted});
})

app.post('/send', (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const output = `Submitted <br>${name}<br>${email}<br>${message}`
    console.log(req.body);

    const tmp = {
        from: `"${req.body.name}" <${req.body.email}>`,
        subject: "Email from rhexa portfolio website",
        text: req.body.message
    }
    mail.send(tmp)
    res.redirect('/?formSubmitted=true')
})

app.listen(port, ()=>console.log(`listening on port ${port}`));