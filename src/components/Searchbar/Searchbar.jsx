import { Component } from 'react';
import { CiSearch } from 'react-icons/ci';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      alert('Enter SMTH');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchBar onSubmit={this.handleFormSubmit}>
        <SearchForm>
          <SearchFormButton type="submit">
            <CiSearch /> Search
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
            value={query}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;
