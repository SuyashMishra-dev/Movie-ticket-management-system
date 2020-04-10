class Region {
  constructor() {}

  // Method for get location from server
  getLocation() {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open("GET", "http://localhost:5000/locations");
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
