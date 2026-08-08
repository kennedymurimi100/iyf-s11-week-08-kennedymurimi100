import { useState } from "react";
import Stats from "./components/Stats";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      likes: 0,
    },
    {
      id: 2,
      title: "Second Post",
      likes: 0,
    },
  ]);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <div>
      <Stats totalPosts={posts.length} totalLikes={totalLikes} />

      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}

export default App;