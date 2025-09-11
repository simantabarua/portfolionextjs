import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="rounded-2xl p-8 mb-8" style={{
          background: '#f0f0f3',
          boxShadow: '9px 9px 16px #a1a1a6, -9px -9px 16px #ffffff',
        }}>
          <h1 className="text-6xl font-bold mb-4" style={{ color: '#2d2d2d' }}>
            404
          </h1>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#2d2d2d' }}>
            Blog Post Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:opacity-90"
            style={{
              background: '#f0f0f3',
              boxShadow: 'inset 9px 9px 16px #a1a1a6, inset -9px -9px 16px #ffffff',
              color: '#6c63ff',
            }}
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}