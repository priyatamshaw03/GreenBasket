import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-green-600 mb-6">About GreenBasket</h1>
      <p className="text-lg mb-10">
        <strong>Fresh. Fast. Friendly.</strong> Welcome to <strong>GreenBasket</strong>, your trusted online destination for fresh groceries and everyday essentials.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">🌿 Our Story</h2>
        <p>
          Founded with a passion for healthy living and sustainable choices, GreenBasket was created to bridge the gap between local farms and modern households. We saw the need for a faster, fresher, and more transparent way to shop — one that supports local communities and puts quality first.
        </p>
        <p className="mt-4">
          Today, we work closely with trusted farmers, producers, and suppliers to deliver only the best to your home — from organic vegetables to handpicked fruits, grains, spices, and more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">🛒 Why Shop With Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Freshness Guaranteed:</strong> We source daily to ensure peak freshness and quality.</li>
          <li><strong>Wide Selection:</strong> From groceries to dairy, bakery, personal care, and cleaning essentials — all under one virtual roof.</li>
          <li><strong>Fast & Reliable Delivery:</strong> Get your orders delivered quickly and safely, with real-time tracking.</li>
          <li><strong>Eco-Friendly Packaging:</strong> We’re committed to reducing waste with sustainable, recyclable materials.</li>
          <li><strong>Customer First:</strong> Your satisfaction is our priority. Friendly support is just a message away.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">🌎 Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Sustainability:</strong> Supporting local producers and reducing carbon footprint.</li>
          <li><strong>Transparency:</strong> Clear pricing, clean sourcing, and honest practices.</li>
          <li><strong>Community:</strong> Building a healthier future together — one basket at a time.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">👨‍🌾 From Local Farms to Your Table</h2>
        <p>
          Every item you order from GreenBasket goes through careful selection and quality checks. By choosing us, you’re not just buying groceries — you're supporting ethical farming, fair trade, and a cleaner environment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">📦 Join Thousands of Happy Customers</h2>
        <p>
          Experience the smarter way to shop groceries online. Whether you're stocking up for the week or need something on-the-go, GreenBasket is here to make life easier — and tastier.
        </p>
      </section>

      <p className="text-xl font-semibold text-green-600 mt-8">
        GreenBasket — Eat Fresh. Live Green.
      </p>
    </div>
  );
};

export default About;
