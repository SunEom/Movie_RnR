import React from 'react';

type SearchBarProps = {
  onSubmit: any;
  onChange: any;
};

const SearchBar = ({ onSubmit, onChange }: SearchBarProps) => {
  return (
    <form className="pt-2 relative -top-1 text-gray-600 flex items-center mr-10" onSubmit={onSubmit}>
      <input
        className="border-b-2 border-gray bg-gray-dark placeholder-gray plcaeholder h-10 pl-3 pr-10  text-base focus:outline-none"
        type="text"
        name="search"
        placeholder="Search"
        onChange={onChange}
      />
      <button type="submit" className="h-10 absolute right-2">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
