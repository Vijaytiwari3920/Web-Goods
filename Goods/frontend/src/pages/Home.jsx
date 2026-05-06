import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <h1>Fresh Groceries & More, <br/> Delivered to You.</h1>
          <p>Experience premium shopping with our curated selection of food, clothing, and household goods.</p>
          <Link to="/category/food" className="btn-primary hero-btn">
            Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="categories-section container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          <Link to="/category/food" className="category-card food-bg">
            <h3>Fresh Food</h3>
            <span>Explore &rarr;</span>
          </Link>
          <Link to="/category/fashion" className="category-card clothes-bg">
            <h3>Fashion</h3>
            <span>Explore &rarr;</span>
          </Link>
          <Link to="/category/grocery" className="category-card grocery-bg">
            <h3>Groceries</h3>
            <span>Explore &rarr;</span>
          </Link>
          <Link to="/category/electronics" className="category-card electronics-bg">
            <h3>Electronics</h3>
            <span>Explore &rarr;</span>
          </Link>
          <Link to="/category/beauty" className="category-card beauty-bg">
            <h3>Beauty</h3>
            <span>Explore &rarr;</span>
          </Link>
          <Link to="/category/sports" className="category-card sports-bg">
            <h3>Sports</h3>
            <span>Explore &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
