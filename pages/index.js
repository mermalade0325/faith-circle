import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Faith Circle</h1>
      <nav className="flex gap-6 text-lg text-blue-800 mb-10 border-b border-blue-200 pb-2">
        <Link href="/read">Read</Link>
        <Link href="/watch">Watch</Link>
        <Link href="/listen">Listen</Link>
        <Link href="/academy">Academy</Link>
      </nav>
    </main>
  );
}