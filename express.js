const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blog.js');
const blogRoutes = require('./routes/blogRoutes.js');

// express app
const app = express()

//connect to mongodb
const dbURI ="mongodb+srv://Ahmed:123456789e@cluster0.appeose.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbURI/*if it was deprecated we use this ===>> , {useNewUrlParser : true, useUnifiedTopology : true}*/)
.then((result) => {
    console.log('connected to db')
    app.listen(3000)               //listen after connected to db only
})
.catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs')

//app.listen(3000)

app.use(express.static('public'))       // middleware and static files
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'))      // middleware with morgan
// app.use(morgan('tiny'))

//mongoose and mongo sandbox routes
app.get('/add-blog', (req,res) => {
    const blog = new Blog({
        title : 'new blog2',
        snippet : 'about my new blog',
        body : 'more about my new blog'
    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/all-blogs',(req,res) => {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/single-blog',(req,res) => {
    Blog.findById("65ecdefeabff82d3c2c0e55f")
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

// app.use((req,res,next)=>{        // middleware without morgan
//     console.log('new request is made : ')
//     console.log('Host : ' , req.hostname)
//     console.log('Path : ' , req.path)
//     console.log('Method : ' , req.method)
//     next()
// })

//routes
app.get('/',(req,res)=>{
    // res.send('<p>Homyyyyyyyyyyyyyyyyyyyyyy</p>')        //static

    // res.sendFile('./views/index.html',{root:__dirname})  //for html files

    // const blogs =[       // passing data through ejs
    //     {title : "First title", snippet : "Lorem ipsum dolor sit amet consectetur"},
    //     {title : "Second title", snippet : "Lorem ipsum dolor sit amet consectetur"},
    //     {title : "Third title", snippet : "Lorem ipsum dolor sit amet consectetur"},
    // ]
    // res.render('index',{title : 'Home', blogs, linky : ""}) //for ejs files

    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    // res.send('<p>aboutyyyyyyyyyyyyyyyyyyyyyy</p>')      //static
    // res.sendFile('./views/about.html',{root:__dirname})  //for html files
    res.render('about',{title : 'Describtion', linky : ""}) //for ejs files
})

// //blog routes => it was cut into blogRoutes file
app.use('/blogs',blogRoutes)  //scoping throw '/blogs' == applying blogRoutes by '/blogs'
// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({createdAt : -1})
//     .then((result)=>{
//         res.render('index', {title : 'All Blogs',  blogs : result, linky : ""})
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// express redirecting
// app.get('/about_me',(req,res)=>{
//     res.redirect('/about')
// })

// //post request
// app.post('/blogs',(req,res)=>{
//     const blog = new Blog(req.body)
//     blog.save()
//     .then((result)=>{
//         res.redirect('/blogs')
//     })
//     .catch((err)=>console.log(err))
// })

// app.get('/blogs/:id', (req,res)=>{
//     const id = req.params.id
//     Blog.findById(id)
//     .then((result) => {
//         res.render('details', {blog: result, title: 'Blog Details', linky:""})
//     })
//     .catch((err)=>console.log(err))
// })

// app.delete('/blogs/:id',(req,res) => {
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//     .then((result)=>{
//         res.json({redirect:'/blogs'})
//     })
//     .catch((err)=>console.log(err))
// })

// app.get('/blogs/create',(req,res)=>{
//     res.render('create',{title : 'New', linky : ""})
// })

//express notfound page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname})    //for html files 
    res.status(404).render('404',{title : 'Error', linky : "/404style.css"})   //for ejs files
})