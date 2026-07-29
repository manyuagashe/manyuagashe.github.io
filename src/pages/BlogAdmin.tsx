import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  created_at: string;
};

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth", { replace: true });
      else setUserId(session.user.id);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/auth", { replace: true });
      else setUserId(data.session.user.id);
      setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const load = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts((data as Post[]) ?? []);
  };

  useEffect(() => {
    if (userId) load();
  }, [userId]);

  const reset = () => {
    setEditing(null);
    setTitle("");
    setContent("");
    setPublished(true);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;
    setMsg("");
    if (editing) {
      const { error } = await supabase
        .from("posts")
        .update({ title, content, published })
        .eq("id", editing.id);
      setMsg(error ? error.message.toLowerCase() : "saved.");
    } else {
      const { error } = await supabase.from("posts").insert({
        author_id: userId,
        title,
        slug: `${slugify(title)}-${Math.random().toString(36).slice(2, 6)}`,
        content,
        published,
      });
      setMsg(
        error
          ? error.message.toLowerCase().includes("row-level security")
            ? "your account doesn't have author access yet."
            : error.message.toLowerCase()
          : "published."
      );
    }
    reset();
    load();
  };

  const remove = async (id: string) => {
    await supabase.from("posts").delete().eq("id", id);
    load();
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Apple Garamond", Garamond, "Times New Roman", serif' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link to="/blog" className="underline text-base">← blog</Link>
        <h1 className="text-4xl font-bold mt-10 mb-16">write</h1>

        <form onSubmit={save} className="space-y-4">
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            className="w-full border border-black px-3 py-2 text-2xl bg-white"
          />
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="write here..."
            rows={14}
            className="w-full border border-black px-3 py-2 text-base bg-white"
          />
          <label className="flex items-center gap-2 text-base">
            <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
            published
          </label>
          <div className="flex gap-3">
            <button type="submit" className="border border-black px-4 py-2 text-base">
              {editing ? "save" : "post"}
            </button>
            {editing && (
              <button type="button" onClick={reset} className="underline text-base">
                cancel
              </button>
            )}
          </div>
        </form>
        {msg && <p className="mt-4 text-base">{msg}</p>}

        <h2 className="text-2xl font-bold mt-24 mb-5">your posts</h2>
        {posts.length === 0 ? (
          <p className="text-base">none yet.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((p) => (
              <li key={p.id} className="text-base">
                {p.title} {!p.published && "(draft)"} ·{" "}
                <button
                  className="underline"
                  onClick={() => {
                    setEditing(p);
                    setTitle(p.title);
                    setContent(p.content);
                    setPublished(p.published);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  edit
                </button>{" "}
                ·{" "}
                <button className="underline" onClick={() => remove(p.id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-24 text-base">
          <button
            className="underline"
            onClick={async () => {
              await supabase.auth.signOut();
              navigate("/blog");
            }}
          >
            sign out
          </button>
        </p>
      </main>
    </div>
  );
};

export default BlogAdmin;
