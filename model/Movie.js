class Movie {
  getAllMoviesOfThreater(id) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5000/movies");
      xhr.onload = () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.response);
          let filterData = data.filter((item) =>
            item.threater.includes(parseInt(id))
          );
          resolve(filterData);
        } else {
          reject(xhr.response);
        }
      };
      xhr.send();
    });
  }
}
