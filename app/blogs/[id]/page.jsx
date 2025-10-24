// app/blogs/[id]/page.jsx
import Image from "next/image";
import { BLOGS } from "../../data/project";

export default function BlogDetail({ params }) {
  const { id } = params;
  const post = BLOGS.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <span className="mb-4 inline-block rounded-md bg-[#EAF4FF] px-3 py-1 text-[12px] font-semibold tracking-wide text-[#4F84C4]">
        {post.tag}
      </span>
      <h1 className="mb-6 text-4xl font-extrabold text-gray-900">{post.title}</h1>

      <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      <p className="text-[16px] leading-8 text-gray-700">
        {post.excerpt} — This is a dummy detail page. Replace with your CMS or
        long-form content later.
      </p>
    </div>
  );
}
