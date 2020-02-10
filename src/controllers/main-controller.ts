import express from 'express'
import path from 'path'

export function showHome(req:any, res:any) {
    const nome_ = 'Davide';
    const cognome_ = 'Aita';
    res.render(path.join(__dirname), '../view/index', {nome: nome_, cognome: cognome_});
 }
