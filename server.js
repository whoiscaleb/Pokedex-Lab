const express = require('express');
const methodOverride = require('method-override')
const app = express();
const pokemon = require('./models/pokemon.js');
const port = 3000

app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { allPokemon: pokemon });
});


//NEW
app.get("/pokemon/new", (req,res) => {
    res.render("new.ejs", {allPokemon: pokemon[req.query.params]})
})


//DESTROY
app.delete("/pokemon/:id", (req, res) => {
    allPokemon.splice(req.params.id, 1)
    res.redirect("/pokemon") 
  })


//UPDATE
app.put("/:id", (req,res) => {
    pokemon(req.params.id) = req.body
    res.redirect('/pokemon')
  }
  )
  
//CREATE: POST 
app.post("/pokemon", (req,res) => {
    allPokemon = pokemon.push(req.body)
    res.redirect("/pokemon")
})

// EDIT : GET 
app.get("/pokemon/:id/edit", (req,res) => {
    res.render("edit.ejs", {
        allPokemon: pokemon[req.params.id],
        x : req.params.id,
    })
    
})
// SHOW: GET //
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        allPokemon: pokemon[req.params.id], 
         x : req.params.id, })
    });

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
})