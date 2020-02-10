"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res) => {
    //const nome_ = 'Davide';
    //const cognome_ = 'Aita';
    //res.render(path.join(__dirname), '../view/index', {nome: nome_, cognome: cognome_});
    res.sendFile(path_1.default.join(__dirname, '../view/index.html'));
});
router.get('/education', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../view/education.html'));
});
router.get('/skills', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../view/skills.html'));
});
router.get('/api/experience', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../view/api/experience.html'));
});
