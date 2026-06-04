'use client';
import CreatePostComponent from '@/components/CreatePostComponent/CreatePostComponent';
import FeedComponent from '@/components/FeedComponent/FeedComponent';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '@/ui/Loader/Loder';

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <CreatePostComponent />
      <FeedComponent />
    </PageWrapper>
  );
}
