//refactored functions for CRUD operatons
const philosophers = require('../data')

const getThinkers = (req, res) => {
    console.log('Getting data from Server')
    res.status(200).json({success: true, data: philosophers})
}

const getThinker = (req, res) => {
    const { id } = req.params

    const getThinker = philosophers.find((thinker) => 
    thinker.id === Number(id))

    if (!getThinker) {
        return res
        .status(404)
        .json({success: false, msg: 'Requested Resource not available'})
    }

    res.status(200).json({success: true, thinker: getThinker})
}

const createThinker = (req, res) => {
    let {id} = req.params
    const {name} = req.body

    const thinker_list = {
        "id" : Number(id),
        "name": name
    };

    res.status(201).json({success: true, data: [...philosophers, thinker_list]})
}

const updateThinker = (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const getThinker = philosophers.find((thinker) => 
      thinker.id === Number(id));
    
    if (!getThinker) {
        return res
        .status(404)
        .json({success: false, msg: 'Requested Resource not available'})
    };

    getThinker.name = name
    res.status(201).json({success: true, data: philosophers})
}

const deleteThinker = (req, res) => {
    const {id} = req.params
    const getThinker = philosophers.find((thinker) => thinker.id === Number(id))

    if(!getThinker) {
        return res
        .status(404)
        .json({success: false, msg: "Requested Resource not available"})
    }

    const modList = philosophers.filter((thinker) =>
        thinker.id !== Number(id))
    res.status(200).json({success: true, data: modList })
}

module.exports = {
    getThinkers,
    getThinker,
    createThinker,
    updateThinker,
    deleteThinker
}