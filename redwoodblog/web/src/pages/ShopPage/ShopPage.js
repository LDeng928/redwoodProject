import { Link, routes } from '@redwoodjs/router'
import SHOP_DATA  from './shop.data'
import CollectionPreview from 'src/components/collection-preview/collection-preview'
import { SearchBox } from 'src/components/search-box/search-box';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { collections, searchField } = this.state;
    return (
      <div className="container">
        <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
        {
          collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
          ))
        }
      </div>
    )
  }
}

export default ShopPage
