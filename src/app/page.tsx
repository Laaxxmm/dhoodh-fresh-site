"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CircleHelp,
  Sprout,
  Edit,
  CircleArrowLeft,
  TriangleAlert,
  MessageCircleQuestion,
  Factory,
  Droplets,
  Cone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Leaf,
  Truck,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";

// =================================================================================================
// FLOATING SHAPE COMPONENT
// =================================================================================================
const FloatingShape = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 rounded-full bg-primary/20 blur-3xl"
      style={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
      animate={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
    />
  );
};

// =================================================================================================
// HERO SECTION COMPONENT
// =================================================================================================
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section className="relative py-36 md:py-48 bg-black overflow-hidden">
      <FloatingShape />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h1 className="text-white font-heading text-[clamp(3rem,8vw,6rem)] font-bold leading-tight mb-6">
            100% Shudd Milk for a Healthier You
          </h1>
          <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)] mb-8">
            Experience the purity of farm-fresh milk, delivered daily to your doorstep in Bangalore.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/products" className="bg-primary text-black font-bold py-3 px-6 rounded-xl hover:bg-secondary transition duration-300">
              Explore Our Products
            </Link>
            <Link href="/about" className="text-white border border-gray-500 py-3 px-6 rounded-xl hover:bg-gray-800 transition duration-300">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =================================================================================================
// ABOUT US SECTION COMPONENT
// =================================================================================================
const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/milk-pouring.jpg" // Replace with your actual image
              alt="Fresh Milk Pouring"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl shadow-black/10"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-white font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">
              Our Story: From Farm to Your Family
            </h2>
            <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)]">
              Dhoodh Fresh was born from a simple desire: to provide families in Bangalore with access to the purest, most nutritious milk possible. We partner directly with local farmers who share our commitment to quality and sustainability.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-white">
                <CheckCircle className="text-primary mr-2" size={20} />
                100% Shudd Milk Guarantee
              </li>
              <li className="flex items-center text-white">
                <CheckCircle className="text-primary mr-2" size={20} />
                Sustainably Sourced
              </li>
              <li className="flex items-center text-white">
                <CheckCircle className="text-primary mr-2" size={20} />
                Delivered Fresh Daily
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// =================================================================================================
// PRODUCT HIGHLIGHTS SECTION COMPONENT
// =================================================================================================
const ProductHighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const products = [
    {
      name: "Fresh Cow Milk",
      description: "Our signature product, rich in nutrients and flavor.",
      image: "/cow-milk.jpg", // Replace with your actual image
    },
    {
      name: "Ghee",
      description: "Made from pure cow's milk, perfect for cooking and health.",
      image: "/ghee.jpg", // Replace with your actual image
    },
    {
      name: "Paneer",
      description: "Freshly made paneer, ideal for delicious recipes.",
      image: "/paneer.jpg", // Replace with your actual image
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-white font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold">
            Experience Our Premium Products
          </h2>
          <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)]">
            Taste the difference of Dhoodh Fresh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-muted rounded-2xl shadow-2xl shadow-black/10 overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-bold text-[clamp(1.5rem,3vw,2rem)] mb-2">{product.name}</h3>
                <p className="text-gray-300 text-[clamp(0.875rem,1.5vw,1rem)]">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================================================================================================
// TESTIMONIALS SECTION COMPONENT
// =================================================================================================
const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Dhoodh Fresh has transformed our family's health. The milk is so pure and delicious!",
      image: "/person1.jpg", // Replace with your actual image
    },
    {
      name: "Rahul Verma",
      text: "I love the convenience of daily delivery and the quality of the milk is unmatched.",
      image: "/person2.jpg", // Replace with your actual image
    },
    {
      name: "Anjali Patel",
      text: "Knowing that Dhoodh Fresh is sustainably sourced makes me feel good about supporting a local business.",
      image: "/person3.jpg", // Replace with your actual image
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-white font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold">
            What Our Customers Are Saying
          </h2>
          <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)]">
            Real stories from real families.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black rounded-2xl shadow-2xl shadow-black/10 p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <div className="flex items-center">
                    <Star className="text-primary mr-1" size={16} />
                    <Star className="text-primary mr-1" size={16} />
                    <Star className="text-primary mr-1" size={16} />
                    <Star className="text-primary mr-1" size={16} />
                    <Star className="text-primary mr-1" size={16} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-[clamp(0.875rem,1.5vw,1rem)]">
                <Quote className="inline-block mr-1 text-primary" size={16} />
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================================================================================================
// CTA SECTION COMPONENT
// =================================================================================================
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <FloatingShape />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2 className="text-white font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">
            Ready to Experience the Freshness?
          </h2>
          <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)] mb-8">
            Order your first delivery today and taste the difference!
          </p>
          <Link href="/order" className="bg-primary text-black font-bold py-3 px-6 rounded-xl hover:bg-secondary transition duration-300">
            Order Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// =================================================================================================
// MAIN PAGE COMPONENT
// =================================================================================================
export default function Page() {
  return (
    <div className="bg-black text-white font-body">
      <HeroSection />
      <AboutUsSection />
      <ProductHighlightsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}