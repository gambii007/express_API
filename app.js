//Usando objeto express
const express = require('express')

//app de Express
const app = express()
app.use(express.json()) //Indicamos que se usara json

//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example aoo listening on port ${port}`);
})

//HTTP METHODS
app.get('/v1/explorers', (req, res) =>{
    console.log(`API Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id:1, name:"Gambi1"}
    const explorer2 = {id:2, name:"Gambi2"}
    const explorer3 = {id:3, name:"Gambi3"}
    const explorer4 = {id:4, name:"Gambi4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`API Explores GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`);
    const explorer = {id: 1, name: "gambi"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) =>{
    console.log(`API Explorers POST request ${new Date()}`);
    const requestBody = req.body //Parametros de un cliente
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) =>{
    console.log(`API Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body //Parametros de un cliente
    res.status(200).json({message: "Updated!"})
})