import { CartState } from './context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './styles.css';

const Home = () => {
  const {
    state: { products },
    productState: { byRating, byStock, byFastDelivery, sort, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowercase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className='home'>
      <Filters />

      <div className='productContainer'>
        {transformProducts().map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;
