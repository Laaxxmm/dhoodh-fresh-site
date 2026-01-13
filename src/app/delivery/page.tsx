"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { MapPin, CalendarDays, Package, Milk, MessageCircleQuestion, CheckCircle, Truck, CreditCard, Users, ScrollText } from "lucide-react";

const FloatingShape = () => {
  return (
    <motion.div
      className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50"
      style={{ x: -100, y: -100 }}
      animate={{ x: 100, y: 100 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
    />
  );
};


const DeliveryMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Image
        src="/map.jpg"
        alt="Delivery Map"
        width={1200}
        height={600}
        className="object-cover w-full h-full"
        style={{ aspectRatio: "1200 / 600" }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-lexend mb-2">Our Bangalore Delivery Zone</h3>
        <p className="text-sm">We deliver fresh milk to most areas within Bangalore. Check your address during checkout.</p>
      </div>
    </motion.div>
  );
};

const DeliverySchedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scheduleData = [
    { day: "Monday - Saturday", time: "6:00 AM - 8:00 AM" },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-muted p-6 rounded-2xl shadow-2xl shadow-black/10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h3 className="text-2xl font-lexend mb-4 text-white">Delivery Schedule</h3>
      <div className="space-y-3">
        {scheduleData.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <CalendarDays className="text-primary w-6 h-6" />
            <div className="text-white">
              <p className="font-semibold">{item.day}</p>
              <p className="text-sm">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};


const OrderingProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    { icon: MapPin, text: "Enter your delivery address." },
    { icon: Milk, text: "Choose your milk and dairy products." },
    { icon: CalendarDays, text: "Select your delivery schedule." },
    { icon: CreditCard, text: "Make a secure payment." },
    { icon: Package, text: "Receive fresh milk at your doorstep!" },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-muted p-6 rounded-2xl shadow-2xl shadow-black/10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h3 className="text-2xl font-lexend mb-4 text-white">How to Order</h3>
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-4 text-white">
            <step.icon className="text-primary w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">{step.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SubscriptionOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const options = [
    { title: "Daily Delivery", description: "Fresh milk delivered every morning.", icon: CalendarDays },
    { title: "Alternate Days", description: "Milk delivery on alternate days.", icon: CalendarDays },
    { title: "Custom Schedule", description: "Choose your own delivery days.", icon: CalendarDays },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-muted p-6 rounded-2xl shadow-2xl shadow-black/10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <h3 className="text-2xl font-lexend mb-4 text-white">Subscription Options</h3>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-4 text-white">
            <option.icon className="text-primary w-6 h-6" />
            <div>
              <h4 className="font-semibold">{option.title}</h4>
              <p className="text-sm">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DeliveryFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqs = [
    { question: "What areas do you deliver to?", answer: "We currently deliver to most areas in Bangalore. Please check your address during checkout." },
    { question: "What time will my milk be delivered?", answer: "Deliveries are typically made between 6:00 AM and 8:00 AM." },
    { question: "How do I change my delivery schedule?", answer: "You can easily manage your subscription and delivery schedule through your account settings." },
    { question: "What if I'm not home during delivery?", answer: "Our delivery personnel will leave the milk at your doorstep in a secure location." },
    { question: "How do I pause my subscription?", answer: "You can pause your subscription anytime through your account settings." },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-muted p-6 rounded-2xl shadow-2xl shadow-black/10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <h3 className="text-2xl font-lexend mb-4 text-white">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="text-white">
            <h4 className="font-semibold flex items-center gap-2"><MessageCircleQuestion className="text-primary w-5 h-5" />{faq.question}</h4>
            <p className="text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <FloatingShape />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px]" />
      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-lexend font-bold mb-4">
            Delivery Information
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/70">
            Get your fresh Dhoodh Fresh milk delivered right to your doorstep.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <DeliveryMap />
          <DeliverySchedule />
        </div>
      </section>

      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrderingProcess />
        </div>
      </section>

      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SubscriptionOptions />
          <DeliveryFAQ />
        </div>
      </section>
    </div>
  );
};

export default Page;