let {people} = require('../data')



const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPersonPostman = (req, res) => {
    // console.log(req.body)
    const { name } = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide the name value'})
    }
    name_object = {'name': name}
    //status code of 201 used for post requests to signify successful post
    //using spread operator and name of array to list array elements to add 'name' to
    //array
    res.status(201).json({success: true, data: [...people, name_object]})
}

const createPerson = (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide the name value'})
    }
    //status code of 201 used for post requests to signify successful post
    res.status(201).json({success: true, person: name})
}

const updatePerson = (req, res) => {
    //get personID from request by destructuring the Id from the object
    //req.params is anything in the url that comes after the colon "/:" (personID used in this url); req.body is the data we send from postman under the Body section
    //if we modify the name in postman then req.body reflects the new name
    const { personID } = req.params
    const { name } = req.body
    
    const getPerson = people.find((person) => person.id === Number(personID))

    if (!getPerson) {
        //status code: 404 resource not found
        return res.status(404).json({success: false, msg: `No person with ${personId}`})
    };

    getPerson.name = name

    res.status(200).json({success: true, data: people})
}

const deletePerson = (req, res) => {
    const { personID } = req.params
    const getPerson = people.find((person) => person.id === Number(personID))
    if (!getPerson) {
        //status code: 404 resource not found
        return res.status(404).json({success: false, msg: `No person with Id:${personID}`})
    };

    //using filter to remove item from list object
    const mod_list = people.filter((person) => person.id !== Number(personID))
    res.status(200).json({success: true, data: mod_list})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}