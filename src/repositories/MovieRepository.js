export default function Repository() {
    const that = this
    that.db = []

    function save(movie) {
        that.db.push(movie)
    }
    
    function get(id) {
        let movie = null
        that.db.forEach((imovie) => {
            if (imovie.id === id) {
                movie = imovie
            }
        })
        return movie
    }
    
    function update(id, uMovie) {
        const movie = get(id)
        if (movie) {
            movie.title = uMovie.title
            movie.director = uMovie.director
            movie.img = uMovie.img
            movie.year = uMovie.year
            movie.duration = uMovie.duration
        }
    }
    
    function del(id) {
    
    }

    that.save = save
    that.get = get
    that.update = update
    that.del = del
}
