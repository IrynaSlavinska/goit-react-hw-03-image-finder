import { Component } from 'react';
import Notiflix from 'notiflix';

import { CiSearch } from 'react-icons/ci';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

Notiflix.Notify.init({
  position: 'right-top',
  timeout: 5000,
});

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { query } = this.state;

    if (query.trim() === '') {
      return Notiflix.Notify.failure('Enter something and try again.');
    }

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchFormButton type="submit">
            <CiSearch /> Search
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;
