import dotenv from 'dotenv'
import Db from './db/db.js'

dotenv.config({
    path:'./env'
})


Db();
































                           //  Database  on starting node
// ;( async ()=>{
//           try{
//             await mongoose.connect(`${process.env.MONGODB_URI}`)
//             app.on('error',(err)=>{
//                  console.log(err);
//                  throw err
//             } )
//              app.listen(process.env.PORT , ()=>{
//                  console.log(`Listenning on ${process.env.PORT}`);
                 
//             })

//             app.get('/',(req,res)=>{
//                  res.send("Database connected succesfully , all is well")
//             })
//           }catch(err){
//             console.log("Mongo db error :");
//             console.log(err.message);
//             throw err
//           }

// })()