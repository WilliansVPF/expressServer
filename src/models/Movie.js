import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const movie = new Schema({     
    title: String,
    director: String,
    img: String,
    year: Date,
    duration: Number,
    like: Boolean
});

export const Movie = mongoose.model('Movie', movie)