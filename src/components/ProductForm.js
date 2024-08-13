import { useState } from 'react';
import api from '../lib/api';
import { useRouter } from 'next/router';

export default function ProductForm({ product = {} }) {
  const [name, setName] = useState(product.name || '');
  const [description, setDescription] = useState(product.description || '');
  const [price, setPrice] = useState(product.price || '');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product.id) {
        await api.put(`/products/${product.id}`, {
          product: { name, description, price },
        });
      } else {
        await api.post('/products', {
          product: { name, description, price },
        });
      }
      router.push('/products');
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div>
      <h1>{product.id ? 'Edit Product' : 'New Product'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">{product.id ? 'Update' : 'Create'}</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}