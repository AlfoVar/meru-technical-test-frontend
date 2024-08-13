"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/pages/login');
  }, [router]);

  return null; // Puedes mostrar un loader o algo mientras redirige
}