class Region {
  constructor() {}

  // Method for get location from server
  getLocation() {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open("GET", "https://suyashmishra-data.herokuapp.com/locations");
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.response);
        }
      };
      xhr.send();
    });
  }
}
