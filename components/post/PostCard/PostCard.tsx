import Image from "next/image";
import { Post } from "@/types/post";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-xl mb-4">
      <div className="flex gap-3 mb-2 items-center">
        <div className="w-10 h-10 bg-[#333] rounded-full" />
        <div className="font-semibold">{post.username}</div>
      </div>

      <div className="mb-2">{post.text}</div>

      {post.image && (
        <div className="relative w-full h-[300px] mb-2">
          <Image
            src={post.image}
            alt="post image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <div className="flex gap-4 text-sm text-gray-400">
        ❤️ {post.likes}
        💬 {post.comments}
      </div>
    </div>
  );
}