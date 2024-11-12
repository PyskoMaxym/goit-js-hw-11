// pixabay-api.js

const apiKey = '46932892-ab4a09809774f514baea4f6c0';

export function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error("Error fetching images:", error);
      throw error;
    });
}
