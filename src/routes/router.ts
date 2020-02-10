import express from 'express'
import path from 'path'
import * as web from '../controllers/main-controller';//richiamo tutte le funzioni contenute in main-controller

const router = express.Router();

router.get('/', (req, res) => {
   //const nome_ = 'Davide';
   //const cognome_ = 'Aita';
   //res.render(path.join(__dirname), '../view/index', {nome: nome_, cognome: cognome_});
   res.sendFile(path.join(__dirname, '../view/index.html')); 
})

router.get('/education', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/education.html'));
})
 
router.get('/skills', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/skills.html'));
})

router.get('/api/experience', (req,res) => {
   res.sendFile(path.join(__dirname,'../view/api/experience.html'));
})
  
export { router }
