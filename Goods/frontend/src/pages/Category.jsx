import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Category.css';

const Category = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeSub = searchParams.get('sub');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:5000/api/products?category=${name}`;
        if (activeSub && activeSub !== 'All') {
          url += `&subCategory=${activeSub}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [name, activeSub]);

  return (
    <div className="category-page container">
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : products.length === 0 ? (
        <div className="no-products">No products found in this category.</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
