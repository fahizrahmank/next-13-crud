import mongoose from 'mongoose'
import React from 'react'


const connectMongoDB= async() => {
    try{
 await mongoose.connect(process.env.MOGODB_URI)
console.log('connecyted to mongodb');
    }catch(error){
        console.log(error);
    }
}
export default connectMongoDB