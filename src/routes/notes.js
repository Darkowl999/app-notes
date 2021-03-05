const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-note', (req, res) => {
    const { title, description } = req.body;
    //validacion
    const errors = [];
    if (!title) {
        errors.push({ text: 'Por favor escriba el titulo' });
    }
    if (!description) {
        errors.push({ text: 'Por favor escriba una descripcion' });
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {

        const newNote = new Note({ title, description });
        console.log(newNote);
        res.send('OK');


    }

});


router.get('/notes', (req, res) => {
    res.send('Notes from database');
});


module.exports = router;