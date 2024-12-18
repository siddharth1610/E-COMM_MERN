import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ categories: [], colors: [], sizes: [] });
  const [selectedFilters, setSelectedFilters] = useState({ category: '', color: '', size: '' });
  const [searchKeyword, setSearchKeyword] = useState('');

  // Fetch filters and products on component mount
  useEffect(() => {
    fetchFilters();
    searchProducts();
  }, []);

  const fetchFilters = async () => {
    try {
      const response = await axios.get('http://localhost:3000/filters');
      setFilters(response.data);
    } catch (error) {
      console.error('Error fetching filters:', error);
    }
  };

  const searchProducts = async (keyword) => {
    try {
      const response = await axios.get('http://localhost:3000/search', {
        params: {
          keyword,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const getProductsWithFilters = async (value) => {
    try {
      const response = await axios.get('http://localhost:3000/categories', {
        params: {
          type: value,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilters({ ...selectedFilters, [key]: value });

    // Fetch products when a filter is selected\
    getProductsWithFilters(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(e.target.value)
  };

  const debounceResizer = debounce((e) => handleSearch(e), 1000);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shop Page</h1>

      {/* Filters Section */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block mb-2 font-semibold">Category</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="">All</option>
            {filters.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Color Filter */}
        <div>
          <label className="block mb-2 font-semibold">Color</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            onChange={(e) => handleFilterChange('color', e.target.value)}
          >
            <option value="">All</option>
            {filters.colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Size Filter */}
        <div>
          <label className="block mb-2 font-semibold">Size</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            onChange={(e) => handleFilterChange('size', e.target.value)}
          >
            <option value="">All</option>
            {filters.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <form className="mb-4" onChange={debounceResizer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        {/* <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
        >
          Search
        </button> */}
      </form>

      {/* Products Grid */}
      {products.length === 0 ? <div>
        <h1 className="text-2xl font-bold mb-4">No products found</h1>
      </div> : <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-200 rounded p-4 shadow"
            >
              <h2 className="font-bold text-lg">{product.title}</h2>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Color: {product.color}</p>
              <p className="text-gray-500">Size: {product.size}</p>
              <p className="text-gray-800 font-bold">Price: ${product.price}</p>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded-md shadow-lg mt-4"
              />
            </div>

          ))}
        </div></div>}
    </div>
  );
}

export default App;
