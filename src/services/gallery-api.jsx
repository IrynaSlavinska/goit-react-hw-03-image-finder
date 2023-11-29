function searchQuery(query) {
  return fetch(`https://pixabay.com/api/${query}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No ${query} found`));
  });
}

export default searchQuery;
