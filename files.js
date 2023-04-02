const fs= require('fs')

// // make directories
// fs.mkdir('./docs',(err)=>{
// if(err)
//     console.log(err)
// console.log("The folder is successfully created")
// })

// write directories

// fs.writeFile('./docs/file1.txt',"hello this is kesavan",(err)=>{
//     if(err)
//         console.log("Something went worng")
//     console.log("The data are placed successfully")
// })

//read file
fs.readFile('./docs/file1.txt',(err,data)=>{
    if(err)
        console.log(err)
    console.log(data.toString())
})

