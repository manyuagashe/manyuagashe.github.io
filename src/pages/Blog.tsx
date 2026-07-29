import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Post = { id: string; title: string; slug: string; created_at: string };

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSignedIn(!!s));
    supabase
      .from("posts")
      .select("id,title,slug,created_at")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data ?? []);
        setLoading(false);
      });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Apple Garamond", Garamond, "Times New Roman", serif' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link to="/" className="underline text-base">← home</Link>
        <h1 className="text-4xl font-bold mt-10 mb-16">blog</h1>

        {loading ? (
          <p className="text-base">loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-base">nothing here yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((p) => (
              <li key={p.id}>
                <Link to={`/blog/${p.slug}`} className="text-2xl font-bold underline">
                  {p.title}
                </Link>
                <div className="text-base">{new Date(p.created_at).toLocaleDateString()}</div>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-24 text-base">
          <Link to={signedIn ? "/blog/admin" : "/auth"} className="underline">
            {signedIn ? "write" : "sign in"}
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Blog;
