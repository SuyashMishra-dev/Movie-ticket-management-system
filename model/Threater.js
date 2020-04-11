class Threater {
  // Get threater by location
  constructor() {
    this.threaters = JSON.parse(localStorage.getItem("threaters")) || [];
  }

  getThreateByLocation(id = 1) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open("GET", "https://suyashmishra-data.herokuapp.com/threater");
      xhr.onload = () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.response);
          localStorage.setItem("threaters", JSON.stringify(data));
          let filterData = data.filter((item) =>
            item.locations.includes(parseInt(id))
          );

          resolve(filterData);
        } else {
          reject(xhr.response);
        }
      };

      xhr.send();
    });
  }

  getThreateByID(id) {
    let threater = this.threaters.filter((item) => item.id == parseInt(id));
    return threater[0];
  }
}
