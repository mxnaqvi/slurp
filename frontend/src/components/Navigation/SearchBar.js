import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fetchBusinesses, getBusinesses } from '../../store/businessReducer';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const businesses = useSelector(getBusinesses);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchBusinesses();
    }
  };

  const searchBusinesses = () => {
    const filteredBusinesses = Object.values(businesses).filter((business) =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredBusinesses.length > 0) {
      history.push(`/businesses/${filteredBusinesses[0].id}`);
    } else {
      history.push('/businesses');
    }

    setSearchQuery('');
  };

  const renderAutoFill = () => {
    const filteredBusinesses = Object.values(businesses).filter((business) =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery.length === 0 || filteredBusinesses.length === 0) {
      return null;
    }

    return (
      <ul className="autocomplete-list">
        {filteredBusinesses.map((business) => (
          <li
            key={business.id}
            className="autocomplete-item"
            onClick={() => handleAutocompleteClick(business.id)}
          >
            {business.name}
          </li>
        ))}
      </ul>
    );
  };

  const handleAutocompleteClick = (businessId) => {
    history.push(`/businesses/${businessId}`);
    setSearchQuery('');
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={searchBusinesses}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {renderAutoFill()}
    </div>
  );
};

export default SearchBar;
