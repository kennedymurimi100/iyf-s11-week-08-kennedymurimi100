function PostCard({ post, onLike }) {
  return (
    <div>
      <h3>{post.title}</h3>

      <button onClick={onLike}>❤️ {post.likes}</button>
    </div>
  );
}

export default PostCard;