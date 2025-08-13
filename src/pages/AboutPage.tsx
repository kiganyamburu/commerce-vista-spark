import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-2xl shadow-lg p-8 md:p-12 mb-10 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          About Commerce Vista Spark
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-4 opacity-90">
          Commerce Vista Spark is a modern e-commerce front-end built with
          React, Vite, TypeScript, Tailwind CSS, and shadcn-ui. Our goal is to
          provide a fast, beautiful, and customizable shopping experience for
          everyone.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <span className="bg-white/20 px-4 py-2 rounded-full text-base font-medium">
            React
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-base font-medium">
            Vite
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-base font-medium">
            TypeScript
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-base font-medium">
            Tailwind CSS
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-base font-medium">
            shadcn/ui
          </span>
        </div>
      </div>

      {/* Features & Tech Stack */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3 text-blue-700 flex items-center gap-2">
            <span>✨</span> Features
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Browse products by category</li>
            <li>View product details and deals</li>
            <li>Shopping cart with add/remove functionality</li>
            <li>Responsive design for all devices</li>
            <li>Easy to customize and extend</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3 text-purple-700 flex items-center gap-2">
            <span>🛠️</span> Tech Stack
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>React & Vite</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>shadcn/ui</li>
          </ul>
        </div>
      </div>

      {/* Team / Contact Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2">
          <span>👋</span> Meet the Team
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-700 mb-2">
              Commerce Vista Spark is built by passionate developers who love
              modern web technologies and great user experiences.
            </p>
            <p className="text-gray-500 text-sm">
              Want to contribute or get in touch?{" "}
              <a
                href="mailto:hello@commercevista.com"
                className="text-blue-600 underline"
              >
                Email us
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/kiganyamburu/commerce-vista-spark"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit our GitHub
              </a>
              .
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120&h=120&fit=crop"
            alt="Team"
            className="rounded-full w-24 h-24 object-cover border-4 border-blue-200 shadow"
          />
        </div>
      </div>

      <p className="mt-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Commerce Vista Spark. All rights
        reserved.
      </p>
    </div>
  );
};

export default AboutPage;
