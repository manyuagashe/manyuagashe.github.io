import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/blog/admin", { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate("/blog/admin", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/blog/admin` },
      });
      setMsg(error ? error.message.toLowerCase() : "check your email to confirm.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message.toLowerCase());
    }
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Apple Garamond", Garamond, "Times New Roman", serif' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <Link to="/blog" className="underline text-base">← blog</Link>
        <h1 className="text-4xl font-bold mt-10 mb-8">{mode === "signin" ? "sign in" : "sign up"}</h1>
        <form onSubmit={submit} className="space-y-4 max-w-sm">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full border border-black px-3 py-2 text-base bg-white"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full border border-black px-3 py-2 text-base bg-white"
          />
          <button type="submit" disabled={busy} className="border border-black px-4 py-2 text-base">
            {busy ? "..." : mode === "signin" ? "sign in" : "sign up"}
          </button>
        </form>
        {msg && <p className="mt-4 text-base">{msg}</p>}
        <p className="mt-8 text-base">
          <button className="underline" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
            {mode === "signin" ? "need an account? sign up" : "have an account? sign in"}
          </button>
        </p>
      </main>
    </div>
  );
};

export default Auth;
