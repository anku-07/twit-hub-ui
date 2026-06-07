import PostCard from '@/components/FeedComponent/PostCard';
import { usePosts } from '@/hooks/api/post/usePosts';
import { FeedComponentWrapper } from '@/styles/StyledComponents/FeedComponentWrapper';
import { PostData } from '@/typescript/types/common.type';
import Loader from '@/ui/Loader/Loder';

const FeedComponent = () => {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) return <Loader />;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <FeedComponentWrapper>
      {data?.allPosts?.map((post: PostData) => (
        <PostCard
          key={post._id}
          postId={post._id}
          content={post.content}
          name={post.author?.name}
          username={post.author?.username}
          time={post.createdAt}
          likes={post.likes}
          userId={post.author?._id}
        />
      ))}
    </FeedComponentWrapper>
  );
};

export default FeedComponent;
