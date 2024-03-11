// global object
// console.log(global)
// global.setTimeout(()=>{
//     console.log("timeout")
// },3000);

// console.log(__dirname) //لينك الفولدر
// console.log(__filename) //لينك الملف

// نستدعي ملف
// const {people, ages} = require('./people');
// console.log(people, ages)

const os = require('os'); // operating system
// console.log(os.platform(), os.homedir())
const fs = require('fs'); // file system
// fs.readFile('./blog1.txt',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(data.toString())
// })
// fs.writeFile('./blog2.txt','Hello boyyy',()=>{
//     console.log(data, 'file is written')
// })

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("folder deleted")
//     })
// }

//deleting files
// if(fs.existsSync('./deleteme.txt')){
//     fs.unlink('./deleteme.txt',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("file deleted")
//     })
// }

//streaming
// const readStream = fs.createReadStream('./blog3.txt',{encoding:'utf8'} /* instead of ".tostring()" */)
// const writeStream = fs.createWriteStream('./blog4.txt')

// readStream.on('data',(chunk)=>{
//     console.log("-----new chunk-----")
//     console.log(chunk.toString())
//     writeStream.write('\n new chunk\n')
//     writeStream.write(chunk)
// })

//piping
// readStream.pipe(writeStream)

const _ = require('lodash')

// creating a server 
const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log('request is made')
// })
// const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    // console.log('request made')

    //random number from 0 to 100 by lodash library
    // const num = _.random(0,100) 
    // console.log(num)

    // const greet = _.once(() => console.log('Hello my friend!!'))
    // greet()
    // greet()  // it runs only once so this one won't run 

    //set header content type
//     res.setHeader('Content-Type','text/html')     // plain is changed depending the content type => 'text/html'
    
    //which path are you fisiting
//     let path = './views/' 
//     switch(req.url){
//         case '/' :
//             path += 'index.html'
//             res.statusCode = 200;
//             break;
//         case '/about' :
//             path += 'about.html'
//             res.statusCode = 200;
//             break;
    
    //redirecting
//         case '/about_us' :
//             res.statusCode = 301;
//             res.setHeader('Location', '/about');
//             res.end();
//             break;
   
    //notfound page
//         default :
//             path += '404.html'
//             res.statusCode = 404;
//             break;

//     }

    //res.write('any content')                     // console.log('<p> any content </p>') >>> you repeat "res.write()" for writing many lines
//     fs.readFile(path,(err,data)=>{ //or send a html file
//         if(err){
//             console.log(err)
//             res.end()  //important .......................................
//         }else{
//             // res.write(data)
//             // res.end()
//             res.end(data)       // shortcut
//         }
//     })                                            
//                          //used after any respont message
// })
// server.listen(3000,'localhost',()=>{
//     console.log('listening for requests on port 3000')
// })

// const express = require('express')
// // express app
// const app = express()
// app.listen(3000)

// app.get('/',(req,res)=>{
//     // res.send('<p>Homyyyyyyyyyyyyyyyyyyyyyy</p>')        //static
//     res.sendFile('./views/index.html',{root:__dirname})
// })

// app.get('/about',(req,res)=>{
//     // res.send('<p>aboutyyyyyyyyyyyyyyyyyyyyyy</p>')      //static
//     res.sendFile('./views/about.html',{root:__dirname})
// })

// //express redirecting
// app.get('/about_me',(req,res)=>{
//     res.redirect('/about')
// })

// //express notfound page
// app.use((req,res)=>{
//     res.status(404).sendFile('./views/404.html',{root:__dirname})
// })