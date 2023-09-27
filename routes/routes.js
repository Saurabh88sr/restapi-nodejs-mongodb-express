const express = require('express');
const Model = require('../model/model');


const router = express.Router()

module.exports = router;

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})



//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        number: req.body.number
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})