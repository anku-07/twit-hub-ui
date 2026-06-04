'use client';
import ProfilePage from '@/components/Profile/ProfilePage';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '@/ui/Loader/Loder';

const Page = () => {
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
      <ProfilePage />
    </PageWrapper>
  );
};

export default Page;
