const mongoose=require('mongoose')
const {Schema}=mongoose.Schema;
 const url='mongodb+srv://sachin875788:8757887103@wanderlust.zrj8k.mongodb.net/?retryWrites=true&w=majority&appName=wanderlust';
main().then(()=>{
    console.log("db connected !");
}).catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(url)
    
}