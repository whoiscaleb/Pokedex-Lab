const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const port = 3000
const allPokemon = module.exports

// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { allPokemon: pokemon });
});


//NEW
app.get("/pokemon/new", (req,res) => {
    res.render("new.ejs", {allPokemon: pokemon[x]})
})


//DESTROY
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon") //redirect back to index route
  })


//UPDATE




//CREATE: POST 
app.post("/pokemon", (req,res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon")
})
// EDIT : GET 
app.get("/pokemon/;id/edit", (req,res) => {
    let x = req.params.id
    res.render("edit.ejs", {allPokemon: pokemon[x]})
})
// SHOW: GET //
app.get('/:id', (req, res) => {
    let x = req.params.id
    res.render('show.ejs', {allPokemon: pokemon[x]})
    });


app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
})