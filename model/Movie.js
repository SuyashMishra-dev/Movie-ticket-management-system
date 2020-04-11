class Movie {
  getAllMoviesOfThreater(id) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5000/movies");
      xhr.onload = () => {
        if (xhr.status === 200) {
          let filteredMovie = JSON.parse(xhr.response);
          let filterfilteredMovie = filteredMovie.filter((item) =>
            item.threater.includes(parseInt(id))
          );
          resolve(filterfilteredMovie);
        } else {
          reject(xhr.response);
        }
      };
      xhr.send();
    });
  }
  getMovieOnFilter(movies, lang, genre) {
    if (genre == "" && lang == "") {
      return movies;
    } else if (genre != "" && lang == "") {
      let filteredMovie = [];
      movies.forEach((elem) => {
        if (elem.type == genre) {
          filteredMovie.push(elem);
        }
      });
      return filteredMovie;
    } else if (genre == "" && lang != "") {
      console.log("Hsh");
      let filteredMovie = [];
      movies.forEach((elem) => {
        if (elem.lang == lang) {
          filteredMovie.push(elem);
        }
      });
      return filteredMovie;
    } else if (genre != "" && lang != "") {
      let filteredMovie = [];
      movies.forEach((elem) => {
        if (elem.type == genre && elem.lang == lang) {
          filteredMovie.push(elem);
        }
      });
      return filteredMovie;
    }
    return movies;
  }
}
