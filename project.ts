type Movie = {
    title: string;
    director: string;
    "release year": number;
    rating: number;
  };
  
  class MovieDatabase {
    private movies: Movie[] = [];
  
    addMovie(movie: Movie): void {
      this.movies.push(movie);
    }
  
    getMovieByTitle(title: string): Movie | undefined {
      return this.movies.find((movie) => movie.title === title);
    }
  
    deleteMovie(title: string): void {
      this.movies = this.movies.filter((movie) => movie.title !== title);
    }
  }
  const db = new MovieDatabase();
  
  db.addMovie({
      title: "The Matrix", director: "The Wachowskis", "release year": 1999,
      rating: 9
  });
  db.addMovie({
    title: "Inseption", director: "Christopher nolan", "release year": 2010,
    rating: 8
});
  db.addMovie({
    title: "The Shawshank Redemption", director: "Frank Darabont", "release year": 1994,
    rating: 10
});
  
  console.log(db.getMovieByTitle("The Shawshank Redemption"));
  
  db.deleteMovie("The Godfather");
  console.log(db.getMovieByTitle("The Godfather"));
  // Output: undefined
  