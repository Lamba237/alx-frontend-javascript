export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('API call succeeded!');
      } else {
        reject('API call failed.');
      }
    }, 1000); // Simulate a 1-second delay
  });
}
