"use client";

import { useEffect, useState } from "react";

// Post type
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches the first 5 posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data: Post[] = await response.json();
        setPosts(data.slice(0, 5)); // Only take the first 5 posts
      } catch (err) {
        setError("Failed to load posts.");
        console.error(err);
      } finally {
        setLoading(false); // Loading stops
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <ul className="pl-6">
        {posts.map((post) => (
          <li className="list-disc" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
