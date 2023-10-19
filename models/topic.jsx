import mongoose, { Schema } from 'mongoose'
import React from 'react'


const topicSchema = new Schema(
    {
        title:String,
        description:String
    },
    {
        timestamps:true 
    }
)

const Topic = mongoose.models.topic || mongoose.model('Topic',topicSchema)
export default Topic;