class Threater {
  // Get threater by location
  getThreateByLocation(id = 1) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open("GET", "http://localhost:5000/threater");
      xhr.onload = () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.response);
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
}
