"use client";

import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import PostCard from "@/components/post/PostCard/PostCard";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: 1,
        username: "alex",
        text: "Первый пост 🚀",
        image: "https://via.placeholder.com/500x300",
        likes: 120,
        comments: 34,
      },
      {
        id: 2,
        username: "maria",
        text: "Минимализм — лучший дизайн",
        likes: 89,
        comments: 12,
      },
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <main className="max-w-150 mx-auto p-5 pb-20">
      <h1 className="text-xl mb-4">Лента</h1>

      {loading ? (
        <p className="empty">Загрузка...</p>
      ) : posts.length === 0 ? (
        <p className="empty">Постов пока нет</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </main>
  );
}