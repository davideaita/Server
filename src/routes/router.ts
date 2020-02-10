import express from 'express'
import path from 'path'
import * as web from '../controllers/main-controller';//richiamo tutte le funzioni di main-controller

const router = express.Router();

router.get('/', (req, res)=>{
   //const nome_ = 'Davide';
   // const cognome_ = 'Aita';
   // res.render(path.join(__dirname), '../view/index', {nome: nome_, cognome: cognome_});
   res.sendFile(path.join(__dirname,'../view/index.ejs')); 
})
router.get('/education', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/education.ejs'));
})
 
router.get('/skills', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/skills.ejs'));
})
 
router.get('/api/experience', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/api/experience.ejs'));
})
 
router.get('/api/education', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/api/education.ejs'));
})
 
router.get('/api/skills', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/api/skills.html'));
})
  
export { router }
