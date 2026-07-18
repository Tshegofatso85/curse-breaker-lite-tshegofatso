import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
