"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function showHome(req, res) {
    const nome_ = 'Davide';
    const cognome_ = 'Aita';
    res.render(path_1.default.join(__dirname), '../view/index', { nome: nome_, cognome: cognome_ });
}
exports.showHome = showHome;
