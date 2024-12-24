const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

User.findOneAndDelete({name:"Tony"}).then((res)=>{
   console.log(res);
});
// User.findByIdAndUpdate( "6722025a0e68fe56a56d0158",{ name: "Bruce" },{new:true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.findById("6722025a0e68fe56a56d0156").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"bruce",email:"bruce@gmail.com",age:47},
// ]).then((res)=>{
//     console.log(res);
// });

// const user2=new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48,
// });
//  user2.save().then((res)=>{
//     console.log(res);
//  }).catch((err)=>{
//     console.log(err);
//  });