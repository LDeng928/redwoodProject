import React from 'react';

export const SearchBox = (props) => (
  <div className="flex justify-center">
      <input type='search' placeholder='search product' onChange={props.onSearchChange} className="mt-4 appearance-none border-ntst-purple border outline-none p-3 w-52 leading-8 mb-8"></input>
  </div>

)
