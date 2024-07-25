// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  });
}

export default getResponseFromAPI;
