import { Component } from 'react';
import Notiflix from 'notiflix';

import pixabayAPI from 'services/gallery-api';

import Searchbar from './Searchbar/Searchbar';
import CirclesLoader from 'components/Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    totalImages: 0,
  };

  // if (prevState.query !== query) {
  //   this.setState({
  //     page: 1,
  //     images: [],
  //     totalImages: 0,
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      pixabayAPI(query, page)
        .then(response => {
          if (response.ok) {
            this.setState({ isLoading: true });
            return response.json();
          }
          return Promise.reject(new Error(`Try again`));
        })
        .then(data => {
          this.setState({
            images: [...prevState.images, ...data.hits],
            totalImages: data.totalHits,
          });
        })
        .catch(error => {
          return Notiflix.Notify.failure(
            'Something went wrong. Try again later'
          );
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
    });
  };

  handleMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, totalImages } = this.state;

    return (
      <div className="container">
        <Searchbar onSubmit={this.handleFormSubmit} />

        {isLoading && <CirclesLoader />}

        {images.length > 0 && <ImageGallery images={images} />}

        {totalImages > images.length && totalImages && (
          <Button onClick={this.handleMoreClick} />
        )}
      </div>
    );
  }
}

export default App;
