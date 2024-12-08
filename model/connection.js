const { string } = require('joi');
const dotenv=require('dotenv').config;
const mongoose=require('mongoose')
const {Schema}=mongoose.Schema;
 const url=dotenv.ATLASDB_URL;
main().then(()=>{
    console.log("db connected !");
}).catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(url)
    
}