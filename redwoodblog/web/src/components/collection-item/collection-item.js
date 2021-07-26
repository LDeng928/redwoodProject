import React from 'react';

// functional component
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="w-2/6 flex flex-col h-80 items-center">
    <div style={{backgroundImage: `url(${imageUrl})`}} className="w-full h-5/6 bg-cover bg-center mb-1"></div>

    <div className="w-full h-1/4 flex justify-between text-xl">
      <span className="w-11/12 mb-4">{name}</span>
      <span className="w-3/12">{price}</span>
    </div>
  </div>
)

export default CollectionItem;
