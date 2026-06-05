'use client';
import ProfilePage from '@/components/Profile/ProfilePage';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

const Page = () => {
  return (
    <ProtectedRoute>
      <PageWrapper>
        <ProfilePage />
      </PageWrapper>
    </ProtectedRoute>
  );
};

export default Page;
