'use client';
import CreatePostComponent from '@/components/CreatePostComponent/CreatePostComponent';
import FeedComponent from '@/components/FeedComponent/FeedComponent';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <PageWrapper>
        <CreatePostComponent />
        <FeedComponent />
      </PageWrapper>
    </ProtectedRoute>
  );
}
