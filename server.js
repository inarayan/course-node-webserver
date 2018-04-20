var express = require('express');
var hbs = require('hbs');
const port = process.env.PORT || 3000;
//create a app variable for express
var app = express();
//set up the view engine
app.set('view engine', 'hbs');

//load the partials
hbs.registerPartials(__dirname+'/partials');

hbs.registerHelper("screamit", (text)=>{
    return text;
})

app.use((req, resp, next) => {
    resp.render('maintenance.hbs');
})
app.get('/', (req, resp)=>{
    //resp.send('Hey this is the first express App');
    resp.render('home.hbs',{
        welcomeMessage:"Welcome to my Home Page"
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        Name:"Indra Bijay Narayan",
        Emp: "04512"
    });
})

app.get('/bad',(req, resp)=>{
    resp.send({
        Error: " This request has a problem"
    })
})

app.listen(port, function(){
    console.log(`Server is listening on ${port}`)
});