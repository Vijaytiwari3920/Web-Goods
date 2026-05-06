import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const sampleProducts = [
  // Food
  { name: 'Artisan Sourdough Bread', category: 'Food', description: 'Freshly baked artisanal sourdough bread.', price: 6.99, image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=500&q=60', countInStock: 20 },
  { name: 'Organic Honeycrisp Apples', category: 'Food', description: 'Sweet, crisp, and locally grown organic apples.', price: 4.99, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&w=500&q=60', countInStock: 50 },
  { name: 'Fresh Atlantic Salmon', category: 'Food', description: 'Premium wild-caught Atlantic salmon fillet.', price: 15.99, image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=60', countInStock: 10 },
  { name: 'Farm Fresh Eggs', category: 'Food', description: 'Dozen free-range organic eggs.', price: 5.49, image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Ripe Hass Avocados', category: 'Food', description: 'Perfectly ripe Hass avocados, pack of 4.', price: 6.49, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=60', countInStock: 25 },
  { name: 'Organic Strawberries', category: 'Food', description: 'Freshly picked sweet strawberries.', price: 4.99, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Gourmet Cheese Platter', category: 'Food', description: 'Assorted fine cheeses perfect for pairing.', price: 24.99, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=60', countInStock: 12 },
  { name: 'Roasted Almonds', category: 'Food', description: 'Lightly salted roasted almonds.', price: 9.99, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d90?auto=format&fit=crop&w=500&q=60', countInStock: 35 },
  { name: 'Whole Wheat Pasta', category: 'Food', description: 'Organic whole wheat spaghetti.', price: 2.99, image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=500&q=60', countInStock: 60 },
  { name: 'Fresh Basil Leaves', category: 'Food', description: 'Aromatic fresh basil leaves for cooking.', price: 1.99, image: 'https://images.unsplash.com/photo-1615486171448-4fd93b6e80b6?auto=format&fit=crop&w=500&q=60', countInStock: 15 },

  // Fashion
  { name: 'Men\'s Premium Cotton T-Shirt', category: 'Fashion', subCategory: 'Men', description: 'Soft, breathable 100% organic cotton t-shirt.', price: 24.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60', countInStock: 15 },
  { name: 'Men\'s Denim Jacket', category: 'Fashion', subCategory: 'Men', description: 'Classic vintage-style denim jacket.', price: 59.99, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=60', countInStock: 10 },
  { name: 'Men\'s Chino Pants', category: 'Fashion', subCategory: 'Men', description: 'Slim-fit comfortable chino trousers.', price: 39.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=500&q=60', countInStock: 25 },
  { name: 'Women\'s Summer Floral Dress', category: 'Fashion', subCategory: 'Women', description: 'Lightweight floral dress perfect for summer.', price: 45.99, image: 'https://images.unsplash.com/photo-1515347619362-f7fb54e6015a?auto=format&fit=crop&w=500&q=60', countInStock: 20 },
  { name: 'Women\'s Leather Handbag', category: 'Fashion', subCategory: 'Women', description: 'Genuine leather handbag with multiple compartments.', price: 89.99, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=60', countInStock: 12 },
  { name: 'Women\'s Yoga Leggings', category: 'Fashion', subCategory: 'Women', description: 'High-waisted athletic leggings.', price: 34.99, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Kids Graphic Tee', category: 'Fashion', subCategory: 'Kids', description: 'Fun and colorful graphic t-shirt for kids.', price: 14.99, image: 'https://images.unsplash.com/photo-1519238382755-46f3e1a0b514?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Kids Denim Overalls', category: 'Fashion', subCategory: 'Kids', description: 'Durable denim overalls for active kids.', price: 29.99, image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=500&q=60', countInStock: 20 },
  { name: 'Kids Winter Jacket', category: 'Fashion', subCategory: 'Kids', description: 'Warm and cozy winter jacket.', price: 49.99, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=500&q=60', countInStock: 15 },
  { name: 'Unisex Cozy Hoodie', category: 'Fashion', subCategory: 'Men', description: 'Warm fleece-lined hoodie.', price: 44.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=60', countInStock: 50 },

  // Grocery
  { name: 'Extra Virgin Olive Oil', category: 'Grocery', description: 'Cold-pressed extra virgin olive oil from Italy.', price: 14.99, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Himalayan Pink Salt', category: 'Grocery', description: 'Pure, unrefined pink salt crystals.', price: 8.99, image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Organic Peanut Butter', category: 'Grocery', description: 'Creamy organic peanut butter, no added sugar.', price: 6.49, image: 'https://images.unsplash.com/photo-1585236746853-27ea2a378d3d?auto=format&fit=crop&w=500&q=60', countInStock: 25 },
  { name: 'Maple Syrup', category: 'Grocery', description: '100% pure Canadian maple syrup.', price: 12.99, image: 'https://images.unsplash.com/photo-1581459869622-cce86eb36873?auto=format&fit=crop&w=500&q=60', countInStock: 18 },
  { name: 'Jasmine Rice', category: 'Grocery', description: 'Premium fragrant jasmine rice, 5lbs.', price: 9.99, image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Whole Bean Coffee', category: 'Grocery', description: 'Medium roast fair-trade whole coffee beans.', price: 15.99, image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=500&q=60', countInStock: 45 },
  { name: 'Green Tea Bags', category: 'Grocery', description: 'Organic green tea, 50 bags.', price: 7.99, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=500&q=60', countInStock: 50 },
  { name: 'Almond Milk', category: 'Grocery', description: 'Unsweetened original almond milk.', price: 3.99, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=60', countInStock: 20 },
  { name: 'Organic Quinoa', category: 'Grocery', description: 'Protein-rich organic white quinoa.', price: 8.49, image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=500&q=60', countInStock: 35 },
  { name: 'Canned Diced Tomatoes', category: 'Grocery', description: 'Organic diced tomatoes in juice.', price: 2.49, image: 'https://images.unsplash.com/photo-1581561578330-bce51e390c9b?auto=format&fit=crop&w=500&q=60', countInStock: 60 },

  // Electronics
  { name: 'Pro Smartphone X1', category: 'Electronics', subCategory: 'Mobile', description: 'Latest flagship smartphone with amazing camera.', price: 999.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=60', countInStock: 10 },
  { name: 'Fast Charging Power Bank', category: 'Electronics', subCategory: 'Mobile', description: '10000mAh portable charger.', price: 29.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Silicone Phone Case', category: 'Electronics', subCategory: 'Mobile', description: 'Durable protective case for smartphones.', price: 14.99, image: 'https://images.unsplash.com/photo-1541560052-5e137f229371?auto=format&fit=crop&w=500&q=60', countInStock: 50 },
  { name: 'Ultra-thin Laptop 15"', category: 'Electronics', subCategory: 'PCs', description: 'High performance laptop for professionals.', price: 1299.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=60', countInStock: 5 },
  { name: 'Gaming Desktop PC', category: 'Electronics', subCategory: 'PCs', description: 'Powerful desktop PC for intense gaming.', price: 1899.99, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=60', countInStock: 8 },
  { name: 'Curved Monitor 27"', category: 'Electronics', subCategory: 'PCs', description: 'Immersive 4K curved display monitor.', price: 349.99, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60', countInStock: 12 },
  { name: 'Wireless Noise-Canceling Headphones', category: 'Electronics', subCategory: 'Accessories', description: 'Premium over-ear headphones with active noise cancellation.', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60', countInStock: 15 },
  { name: 'Smart Fitness Watch', category: 'Electronics', subCategory: 'Accessories', description: 'Track your health, workouts, and notifications.', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60', countInStock: 25 },
  { name: 'Mechanical Keyboard', category: 'Electronics', subCategory: 'Accessories', description: 'RGB backlit mechanical gaming keyboard.', price: 109.99, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Wireless Mouse', category: 'Electronics', subCategory: 'Accessories', description: 'Ergonomic wireless optical mouse.', price: 49.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=60', countInStock: 45 },

  // Beauty
  { name: 'Luxury Skincare Set', category: 'Beauty', description: 'Complete 3-step daily skincare routine.', price: 89.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Matte Liquid Lipstick', category: 'Beauty', description: 'Long-lasting, vibrant matte lip color.', price: 24.99, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=60', countInStock: 60 },
  { name: 'Hydrating Face Serum', category: 'Beauty', description: 'Hyaluronic acid face serum for glowing skin.', price: 34.99, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=60', countInStock: 35 },
  { name: 'Volumizing Mascara', category: 'Beauty', description: 'Waterproof mascara for maximum volume.', price: 18.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=60', countInStock: 50 },
  { name: 'Eyeshadow Palette', category: 'Beauty', description: '12 versatile shades for day to night looks.', price: 45.99, image: 'https://images.unsplash.com/photo-1512496015851-a1c84bce1c56?auto=format&fit=crop&w=500&q=60', countInStock: 25 },
  { name: 'SPF 50 Sunscreen', category: 'Beauty', description: 'Broad spectrum daily facial sunscreen.', price: 22.99, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Makeup Brush Set', category: 'Beauty', description: 'Professional 10-piece makeup brush kit.', price: 29.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Rosewater Toner', category: 'Beauty', description: 'Refreshing facial toner spray.', price: 16.99, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=60', countInStock: 20 },
  { name: 'Exfoliating Body Scrub', category: 'Beauty', description: 'Sugar body scrub for smooth skin.', price: 26.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=60', countInStock: 35 },
  { name: 'Nourishing Hair Oil', category: 'Beauty', description: 'Argan oil treatment for silky hair.', price: 32.99, image: 'https://images.unsplash.com/photo-1608248593842-83b65287e07a?auto=format&fit=crop&w=500&q=60', countInStock: 28 },

  // Sports
  { name: 'Premium Yoga Mat', category: 'Sports', description: 'Non-slip, eco-friendly yoga mat.', price: 39.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=500&q=60', countInStock: 30 },
  { name: 'Adjustable Dumbbell Set', category: 'Sports', description: 'Space-saving adjustable dumbbells for home workouts.', price: 149.99, image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=500&q=60', countInStock: 10 },
  { name: 'Resistance Bands Set', category: 'Sports', description: 'Set of 5 resistance bands with different tension levels.', price: 19.99, image: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?auto=format&fit=crop&w=500&q=60', countInStock: 50 },
  { name: 'Protein Shaker Bottle', category: 'Sports', description: 'Leak-proof shaker bottle with blending ball.', price: 12.99, image: 'https://images.unsplash.com/photo-1584735174965-98c07e0c80c4?auto=format&fit=crop&w=500&q=60', countInStock: 60 },
  { name: 'Jump Rope', category: 'Sports', description: 'Adjustable speed jump rope for cardio.', price: 15.99, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=60', countInStock: 40 },
  { name: 'Foam Roller', category: 'Sports', description: 'High-density foam roller for muscle recovery.', price: 24.99, image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=500&q=60', countInStock: 25 },
  { name: 'Basketball', category: 'Sports', description: 'Official size indoor/outdoor basketball.', price: 29.99, image: 'https://images.unsplash.com/photo-1519861531473-9200260764bf?auto=format&fit=crop&w=500&q=60', countInStock: 35 },
  { name: 'Tennis Racket', category: 'Sports', description: 'Lightweight professional tennis racket.', price: 119.99, image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=500&q=60', countInStock: 15 },
  { name: 'Running Shoes', category: 'Sports', description: 'Breathable and lightweight running shoes.', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60', countInStock: 20 },
  { name: 'Gym Duffel Bag', category: 'Sports', description: 'Spacious sports duffel bag with shoe compartment.', price: 45.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60', countInStock: 30 }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
