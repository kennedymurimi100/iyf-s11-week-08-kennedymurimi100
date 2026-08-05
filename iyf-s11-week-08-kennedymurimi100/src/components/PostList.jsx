import PostCard from "./PostCard";

function PostList({ posts, onLike }) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
