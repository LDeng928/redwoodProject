import React from 'react';
import CollectionItem  from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div>
    <div className="flex flex-col mb-8">
      <h1 className="text-2xl mb-6">{title.toUpperCase()}</h1>
      <div className="flex justify-between gap-2">
        {
          items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps}></CollectionItem>
          ))
        }
      </div>
    </div>
  </div>
)

export default CollectionPreview;
