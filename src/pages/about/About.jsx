import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaTags } from "react-icons/fa";

function AboutUs() {
  const features = [
    {
      icon: <FaShippingFast size={30} />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across India.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Secure Shopping",
      description: "100% secure payments and customer protection.",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
      description: "Dedicated support team ready to help anytime.",
    },
    {
      icon: <FaTags size={30} />,
      title: "Best Deals",
      description: "Exciting discounts and affordable prices every day.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">
          About Zaptor
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Zaptor is your trusted online shopping destination, offering
          high-quality products at affordable prices. We aim to provide
          a seamless shopping experience with fast delivery and excellent
          customer support.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">

        <div>
          <img
            src="https://tenjump.com/wp-content/uploads/2022/11/eCommerce-Website-Components-photo.jpg"
            alt="About Zaptor"
            className="rounded-2xl shadow-lg w-full h-100 object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-5">
            Our Story
          </h2>

          <p className="text-gray-600 mb-4">
            Zaptor started with a simple vision: make online shopping
            easier, faster, and more affordable for everyone.
          </p>

          <p className="text-gray-600 mb-4">
            We carefully select products from trusted sellers and ensure
            customers receive the best value for their money.
          </p>

          <p className="text-gray-600">
            Today, Zaptor serves thousands of customers and continues
            to grow with a customer-first approach.
          </p>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">

        <div className="bg-purple-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600">
            To provide high-quality products, affordable prices,
            and a seamless shopping experience for customers
            across the country.
          </p>
        </div>

        <div className="bg-purple-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600">
            To become one of India's most trusted and customer-centric
            ecommerce platforms.
          </p>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="mb-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Zaptor?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center text-purple-600 mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-purple-700 text-white rounded-3xl py-12 px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5K+</h3>
            <p>Products</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Trusted Sellers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p>Support</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutUs;