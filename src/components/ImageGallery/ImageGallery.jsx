import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { Component } from 'react';

import { ImageList } from './ImageGallery.styled';
// import pixabayAPI from 'services/gallery-api';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40019881-2bffa581496356e8a050c3650';
const apiOptions = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  q: 'cat',
  page: 1,
};

class ImageGallery extends Component {
  state = {
    query: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    if (prevProps.query !== query) {
      this.setState({ status: 'pending' });

      fetch(`${BASE_URL}?key=${API_KEY}&${apiOptions}`)
        .then(
          response => response.json()
          //   if (response.ok) {
          //     return response.json();
          //   }
          //   return Promise.reject(new Error(`No ${query} found`));
        )
        .then(query => {
          console.log(query);
          this.setState({ query, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    return (
      <ImageList>
        {/* {images.map(({ url, alt }, index) => {
          return <ImageGalleryItem key={index} url={url} alt={alt} />;
        })} */}
      </ImageList>
    );
  }
}

export default ImageGallery;
