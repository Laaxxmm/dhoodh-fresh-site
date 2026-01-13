"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Implement your form submission logic here (e.g., sending an email)
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-2xl font-lexend text-white mb-4">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-black text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-black text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-black text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-black py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

const ContactInfo = () => {
  return (
    <motion.div
      className="space-y-6"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-2xl font-lexend text-white mb-4">Contact Information</h3>
      <div className="flex items-center space-x-3 text-white">
        <MapPin className="h-6 w-6 text-primary" />
        <p>123 Dairy Lane, Bangalore, India</p>
      </div>
      <div className="flex items-center space-x-3 text-white">
        <Phone className="h-6 w-6 text-primary" />
        <p>+91 9876543210</p>
      </div>
      <div className="flex items-center space-x-3 text-white">
        <Mail className="h-6 w-6 text-primary" />
        <p>info@dhoodhfresh.com</p>
      </div>
    </motion.div>
  );
};

const SocialLinks = () => {
  return (
    <motion.div
      className="flex space-x-4"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <a
        href="#"
        className="text-white hover:text-primary transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-white hover:text-primary transition-colors duration-300"
        aria-label="Facebook"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-white hover:text-primary transition-colors duration-300"
        aria-label="Twitter"
      >
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-white hover:text-primary transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-6 w-6" />
      </a>
    </motion.div>
  );
};

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:80px_80px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-[clamp(3rem,8vw,6rem)] font-lexend font-bold mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-[clamp(1rem,2vw,1.25rem)] text-white/70"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            We&apos;d love to hear from you! Get in touch with us using the form below or
            through our contact information.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;