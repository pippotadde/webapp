import React from 'react';

const SearchBar = () => {
  return (
    <div className="p-3 bg-secondary text-white text-center">
      <h2>Ricerca</h2>
      <input
        type="text"
        placeholder="Cerca..."
        className="form-control my-2"
      />
      <button className="btn btn-light">Cerca</button>
    </div>
  );
};

export default SearchBar;

