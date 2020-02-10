import express from 'express'
import path from 'path'
import {router} from './routes/router';
import bodyParser from 'body-Parser'
const port = 3000;

const app = express();

//Gestione risorse statiche nella cartella public
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

//body-Parser va inserito prima degli instradamenti altrimenti node non è in grado di interpretare il body delle richieste
app.use(bodyParser.urlencoded({extended: true}));
//Gestione Instradamenti o Routes
app.use('/', router);
//app.get('/', (req,res) => {
  //  res.send('Questa è la home page del mio sito web');
//})

//app.get('/test', (req,res) => {
 //   res.sendFile(path.join(__dirname,'./test.html'));
 //})
/*
app.get('/', (req,res) => {
   res.sendFile(path.join(__dirname,'/view/index.html'));
})

app.get('/experience', (req,res) => {
   res.sendFile(path.join(__dirname,'/view/experience.html'));
})

app.get('/education', (req,res) => {
   res.sendFile(path.join(__dirname,'view/education.html'));
})

app.get('/skills', (req,res) => {
   res.sendFile(path.join(__dirname,'view/skills.html'));
})

app.get('/api/experience', (req,res) => {
   res.sendFile(path.join(__dirname,'/view/api/experience.html'));
})

app.get('/api/education', (req,res) => {
   res.sendFile(path.join(__dirname,'/view/api/education.html'));
})

app.get('/api/skills', (req,res) => {
   res.sendFile(path.join(__dirname,'/view/api/skills.html'));
})*/
 
/*
app.get('/json', (req,res) => {
    res.json({'nome':'Davide'});
 })

app.get('/errore', (req,res) => {
    res.status(404).send('Pagina non trovata');
})

app.get('/redirect', (req,res) => {
    res.redirect('/page2');
})

app.get('/page2', (req,res) => {
   res.sendFile(path.join(__dirname,'../page2.html'));
})

app.get('/cliente/:id', (req,res) => {
    res.send('Il parametro recuperato dall\'url è: ' + req.params.id);
 })
 */

app.listen(port, () => {
    console.log('Applicazione in ascolto su localhost:3000')
})

console.log('La mia prima applicazione node')
