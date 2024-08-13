import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from '../../../Lib/api';
import ProductForm from '../../../../components/ProductForm';

export default function EditProduct() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    
    async function fetchProduct() {
      const response = await api.get(`/api/v1/products/${id}`);
      setProduct(response.data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return <ProductForm product={product} />;
}