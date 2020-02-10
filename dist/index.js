"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = require("./routes/router");
const body_Parser_1 = __importDefault(require("body-Parser"));
const port = 3000;
// per mettere in ascolto il server node alle richieste http
const app = express_1.default();
//Gestione risorse statiche (middleware express) nella cartella public
app.use(express_1.default.static(path_1.default.join(__dirname, 'view')));
//app.set('view engine', 'ejs');
//body-Parser va inserito prima degli instradamenti altrimenti node non è in grado di interpretare il body delle richieste
app.use(body_Parser_1.default.urlencoded({ extended: true }));
//Gestione Instradamenti o Routes
app.use('/', router_1.router);
app.get('/', (req, res) => {
    res.send('Questa è la home page del mio sito web');
});
app.get('/test./', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './test.html'));
});
app.get('/page2../', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../page2.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../view/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/about.html'));
});
app.get('/experience', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/experience.html'));
});
app.get('/education', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/education.html'));
});
app.get('/skills', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/skills.html'));
});
app.get('/interests', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/interests.html'));
});
app.get('/award', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/award.html'));
});
app.get('/api/experience', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/api/experience.html'));
});
app.get('/api/education', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './view/api/education.html'));
});
//----------
app.get('/json', (req, res) => {
    res.json({ 'nome': 'Davide' });
});
app.get('/errore', (req, res) => {
    res.status(404).send('Pagina non trovata');
});
app.get('/redirect', (req, res) => {
    res.redirect('/page2');
});
app.get('/page2', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../page2.html'));
});
app.get('/cliente/:id', (req, res) => {
    res.send('Il parametro recuperato dall\'url è: ' + req.params.id);
});
//------------
app.listen(port, () => {
    console.log('Applicazione in ascolto su localhost:3000');
});
console.log('Server in esecuzione');
