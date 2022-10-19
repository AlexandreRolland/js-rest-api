const express = require("express");
const app = express();
app.use(express.json())

const artists = require('./artists.json')


app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})

app.get('/artists', (req,res) => {
    res.status(200).json(artists)
})

app.get('/artists/:id', (req,res) => {
    const id = Number(req.params.id);
    const artist = artists.find(i => i.id === id);
    res.status(200).json(artist);
})

app.post('/artists', (req,res) => {
    const newArtist = {
        id : req.body.id,
        name : req.body.name,
        type : req.body.type,
        description : req.body.description,
    }

    artists.push(newArtist) 
    res.status(200).json(artists);
})

app.put('/artists/:id', (req,res) => {

    const id = parseInt(req.params.id)
    let artist = artists.find(artist => artist.id === id)

        artist.id = req.body.id,
        artist.name = req.body.name,
        artist.type = req.body.type,
        artist.description = req.body.description

    res.status(204).json(artist);
})

app.delete('/artists/:id', (req,res) => {

    const id = parseInt(req.params.id)
    let artist = artists.find(artist => artist.id === id)
    artists.splice(artists.indexOf(artist),1)
    res.status(204).json(artist);
})