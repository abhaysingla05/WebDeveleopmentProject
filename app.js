
let express = require ("express")
let path = require("path")
let connectdb = require("./connection/connectDb.js")
const entry = require("./model/model.js")
const add = require("./model/model.js")
let model= require("./model/model.js")
let bodyParser = require("body-parser");
let ejs = require("ejs")
let app = express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true}))

app.use(express.static (path.join(__dirname, "public")))
app.get("/", (req,res)=>{
    res.sendFile (path.join(__dirname, "index.html"))
})

// app.use(express.static('public'));
connectdb()
add()

// let myfile = path.join(__dirname, "index.html")
app.use(express.static (path.join(__dirname, "public")))

app.set("view engine","ejs");

app.get("/Home", function(req,res){
    res.render("header");
})


app.get("/Product", function(req,res){
    res.render("product");
})

app.get("/Specification", function(req,res){
    res.render("Specification");
})
app.get("/Testimonal", function(req,res){
    res.render("testimonal");
})
app.get("/ContactUs", function(req,res){
    res.render("ContactUs");
})
app.get("/Footer", function(req,res){
    res.render("footer");
})

app.post("/index", (req, res) => {
    // let name = req.body.name
    // let email = req.body.email
    // let message = req.body.message

    console.log(req.body);

    let ent = new entry(req.body);

    ent.save()
    res.redirect("/")
})



app.listen("3000", ()=>{
 
console.log('connected to the server')
console.log(__dirname)
})
