import { useState, useEffect } from 'react';
import api from '../Lib/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/api/v1/products');
      setProducts(response.data);
    }

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/api/v1/products/${id}`);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={() => router.push('/api/v1/products')}>Nuevo Producto</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => router.push(`/products/${product.id}`)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}