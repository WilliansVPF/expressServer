import { Movie } from '../models/Movie'


export default class MovieRepository {

    add(title, director, img, year, duration) {
        const newMovie = new Movie({title, director, img, year, duration})
        return newMovie.save()        
    }

    get(){
        return Movie.find()
    }

    getId(id){
        return Movie.findById(id)
    }

    del(id){
        return Movie.findByIdAndDelete(id)
    }

    update(id, title, director, img, year, duration){
        const newMovie = new Movie({title, director, img, year, duration})
        return Movie.findByIdAndUpdate(id, newMovie)
    }

}

