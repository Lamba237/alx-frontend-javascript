export default function handleResponseFromAPI(promise) {
  const stat = 'Got a response from the API';
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((error) => new Error())
    .finally(() => {
      console.log(stat);
    });
}
