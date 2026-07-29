import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Post = { title: string; content: string; created_at: string };

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("posts")
      .select("title,content,created_at")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Apple Garamond", Garamond, "Times New Roman", serif' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link to="/blog" className="underline text-base">← blog</Link>
        {loading ? (
          <p className="mt-10 text-base">loading...</p>
        ) : !post ? (
          <p className="mt-10 text-base">post not found.</p>
        ) : (
          <article className="mt-10">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <p className="text-base mb-16">{new Date(post.created_at).toLocaleDateString()}</p>
            <div className="text-base whitespace-pre-wrap leading-relaxed">{post.content}</div>
          </article>
        )}
      </main>
    </div>
  );
};

export default BlogPost;
