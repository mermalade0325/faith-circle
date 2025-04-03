import Link from "next/link";

const resources = [
    { title: "Cyclone Guide", file: "/pdfs/cyclone-guide.pdf" },
    { title: "Morning Adhkar", file: "/pdfs/morning-adhkar.pdf" },
];

export default function Read() {
    return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Read</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
            <div
            key={idx}
            className="border rounded-xl shadow hover:shadow-md transition p-4"
            >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {res.title}
            </h2>
            <a
                href={res.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800"
            >
                View PDF
            </a>
            </div>
        ))}
        </div>
    </main>
    );
}
