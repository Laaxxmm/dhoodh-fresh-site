"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Milk,
  Leaf,
  CircleHelp,
  Utensils,
  MessageCircleQuestion,
  ChefHat,
  Calculator,
  Droplets,
  Factory
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

// Sub-Component: ImmunityBenefits
const ImmunityBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={item}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading mb-6">
              Boost Your Immunity with Dhoodh Fresh
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] font-body mb-4">
              Dhoodh Fresh milk is packed with essential nutrients that help strengthen your immune system.
            </p>
            <ul className="list-disc pl-5">
              <li className="text-[clamp(1rem,2vw,1.25rem)] font-body mb-2">
                Rich in Vitamin D, crucial for immune function.
              </li>
              <li className="text-[clamp(1rem,2vw,1.25rem)] font-body mb-2">
                Contains Vitamin A, supporting healthy mucous membranes.
              </li>
              <li className="text-[clamp(1rem,2vw,1.25rem)] font-body mb-2">
                Source of protein, essential for building and repairing tissues.
              </li>
            </ul>
          </motion.div>
          <motion.div variants={item} className="flex justify-center">
            <Image
              src="/immunity-boost.png" // Replace with your image
              alt="Immunity Boost"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl shadow-black/10"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-Component: NutritionalInformation
const NutritionalInformation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nutritionalData = [
    { name: "Calcium", value: "300mg", unit: "per serving", icon: <Calculator size={32} color="#00FFCC" /> },
    { name: "Protein", value: "8g", unit: "per serving", icon: <Milk size={32} color="#00FFCC" /> },
    { name: "Vitamin D", value: "25%", unit: "DV", icon: <ShieldCheck size={32} color="#00FFCC" /> },
    { name: "Potassium", value: "10%", unit: "DV", icon: <Leaf size={32} color="#00FFCC" /> },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={item} className="text-[clamp(2rem,5vw,3.5rem)] font-heading mb-4">
            Nutritional Information
          </motion.h2>
          <motion.p variants={item} className="text-[clamp(1rem,2vw,1.25rem)] font-body text-gray-400">
            Discover the goodness packed in every glass of Dhoodh Fresh milk.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {nutritionalData.map((itemData, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 text-left"
            >
              <div className="mb-4">{itemData.icon}</div>
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-heading mb-2">{itemData.name}</h3>
              <p className="text-[clamp(1rem,2vw,1.25rem)] font-body">
                {itemData.value} {itemData.unit}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Sub-Component: ExpertQuotes
const ExpertQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const quotes = [
    {
      quote: "Dhoodh Fresh milk is a great source of nutrients for overall health and immunity.",
      author: "Dr. Anjali Patel, Nutritionist",
    },
    {
      quote: "I recommend Dhoodh Fresh to all my patients looking for fresh and nutritious milk.",
      author: "Dr. Rajesh Kumar, Pediatrician",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={item} className="text-[clamp(2rem,5vw,3.5rem)] font-heading mb-4">
            What Experts Say
          </motion.h2>
          <motion.p variants={item} className="text-[clamp(1rem,2vw,1.25rem)] font-body text-gray-400">
            Trusted by experts for its quality and health benefits.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {quotes.map((quote, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-black rounded-2xl shadow-2xl shadow-black/10 p-6"
            >
              <blockquote className="text-[clamp(1.1rem,2.2vw,1.4rem)] font-body italic mb-4">
                "{quote.quote}"
              </blockquote>
              <p className="text-[clamp(0.9rem,1.8vw,1.1rem)] font-body text-gray-300">- {quote.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Sub-Component: Recipes
const Recipes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const recipeData = [
    {
      title: "Turmeric Milk",
      description: "A traditional remedy to boost immunity.",
      image: "/turmeric-milk.jpg", // Replace with your image
      ingredients: ["Dhoodh Fresh Milk", "Turmeric Powder", "Honey"],
      instructions: ["Heat milk", "Add turmeric and honey", "Stir well and drink"],
      icon: <ChefHat size={32} color="#00FFCC" />,
    },
    {
      title: "Smoothie",
      description: "Delicious and nutritious smoothie for a healthy start.",
      image: "/smoothie.jpg", // Replace with your image
      ingredients: ["Dhoodh Fresh Milk", "Fruits", "Nuts"],
      instructions: ["Blend all ingredients", "Pour into a glass", "Enjoy"],
      icon: <Utensils size={32} color="#00FFCC" />,
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={item} className="text-[clamp(2rem,5vw,3.5rem)] font-heading mb-4">
            Healthy Recipes with Dhoodh Fresh
          </motion.h2>
          <motion.p variants={item} className="text-[clamp(1rem,2vw,1.25rem)] font-body text-gray-400">
            Explore delicious and healthy recipes using Dhoodh Fresh milk.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {recipeData.map((recipe, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-muted rounded-2xl shadow-2xl shadow-black/10"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={600}
                height={400}
                className="rounded-t-2xl object-cover w-full h-64"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="p-6">
                <div className="mb-4">{recipe.icon}</div>
                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-heading mb-2">{recipe.title}</h3>
                <p className="text-[clamp(1rem,2vw,1.25rem)] font-body mb-4">{recipe.description}</p>
                <h4 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-heading mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="text-[clamp(1rem,2vw,1.25rem)] font-body">{ingredient}</li>
                  ))}
                </ul>
                <h4 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-heading mb-2">Instructions:</h4>
                <ol className="list-decimal pl-5">
                  {recipe.instructions.map((instruction, i) => (
                    <li key={i} className="text-[clamp(1rem,2vw,1.25rem)] font-body">{instruction}</li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Sub-Component: FAQ
const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqData = [
    {
      question: "How does Dhoodh Fresh milk boost immunity?",
      answer: "Dhoodh Fresh milk is rich in Vitamin D, Vitamin A, and protein, all essential for a strong immune system.",
    },
    {
      question: "Is Dhoodh Fresh milk suitable for children?",
      answer: "Yes, Dhoodh Fresh milk is an excellent source of nutrition for children and helps in their growth and development.",
    },
    {
      question: "Where does Dhoodh Fresh milk come from?",
      answer: "Dhoodh Fresh milk comes from our network of trusted local farmers who follow sustainable and ethical practices.",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={item} className="text-[clamp(2rem,5vw,3.5rem)] font-heading mb-4">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={item} className="text-[clamp(1rem,2vw,1.25rem)] font-body text-gray-400">
            Find answers to common questions about Dhoodh Fresh and its benefits.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-black rounded-2xl shadow-2xl shadow-black/10 p-6"
            >
              <details>
                <summary className="text-[clamp(1.1rem,2.2vw,1.4rem)] font-heading flex items-center justify-between cursor-pointer">
                  {faq.question}
                  <MessageCircleQuestion size={24} className="ml-2" />
                </summary>
                <p className="text-[clamp(1rem,2vw,1.25rem)] font-body mt-4">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="bg-black text-white font-inter">
      <ImmunityBenefits />
      <NutritionalInformation />
      <ExpertQuotes />
      <Recipes />
      <FAQ />
    </div>
  );
};

export default Page;