import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={query} />
      </div>
    );
  }
}

export default App;
