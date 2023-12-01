const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40019881-2bffa581496356e8a050c3650';

function searchQuery(query, page) {
  const apiOptions = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    q: query,
    page,
  });

  return fetch(`${BASE_URL}?key=${API_KEY}&${apiOptions}`);
}

export default searchQuery;
