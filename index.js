const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/src', express.static('src'))

app.get('/', (req,res)=>{
    const skillList = require('./src/json/skills.json')
    const projects = [
        {
            name: "Project 1",
            image: "src/img/showcase1.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rerum modi iure quo facere? Consequatur officiis eius eos itaque molestiae corrupti illo molestias magnam? Eaque nulla beatae deleniti adipisci placeat?",
            tags: ["node JS", "Express JS", "EJS"],
            github: "#",
            url: "#"
        },
        {
            name: "Project 2",
            image: "src/img/showcase1.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rerum modi iure quo facere? Consequatur officiis eius eos itaque molestiae corrupti illo molestias magnam? Eaque nulla beatae deleniti adipisci placeat?",
            tags: ["node JS", "Express JS", "Rest API"],
            github: "#",
            url: "#"
        },
    ]
    res.render('index', {skillList, projects});
})

app.listen(port, ()=>console.log(`listening on port ${port}`));