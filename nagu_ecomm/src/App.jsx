import { useState } from 'react';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' },
  { id: 2, name: 'Smartphone', price: 699, description: 'Latest model smartphone' },
  { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling headphones' },
  { id: 4, name: 'Smartwatch', price: 299, description: 'Smartwatch with health tracking' },
  { id: 5, name: 'Camera', price: 499, description: 'High-resolution digital camera' }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <>
      <h1>Ecommerce</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
