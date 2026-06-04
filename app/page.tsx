'use client';
import CreatePostComponent from '@/components/CreatePostComponent/CreatePostComponent';
import FeedComponent from '@/components/FeedComponent/FeedComponent';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <CreatePostComponent />
      <FeedComponent />
    </PageWrapper>
  );
}
