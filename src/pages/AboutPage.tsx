import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        About Commerce Vista Spark
      </h1>
      <p className="mb-4 text-lg text-gray-700 text-center">
        Commerce Vista Spark is a modern e-commerce front-end built with React,
        Vite, TypeScript, Tailwind CSS, and shadcn-ui. Our goal is to provide a
        fast, beautiful, and customizable shopping experience for everyone.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Browse products by category</li>
          <li>View product details and deals</li>
          <li>Shopping cart with add/remove functionality</li>
          <li>Responsive design for all devices</li>
          <li>Easy to customize and extend</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>React & Vite</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>shadcn/ui</li>
        </ul>
      </div>
      <p className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Commerce Vista Spark. All rights
        reserved.
      </p>
    </div>
  );
};

export default AboutPage;
