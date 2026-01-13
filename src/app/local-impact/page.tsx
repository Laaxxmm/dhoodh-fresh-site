"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ImagePlus, Users, Lightbulb, Recycle, Award, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- COMPONENTS ---

const FarmerStoryCard = ({ name, description, imageUrl }: { name: string; description: string; imageUrl: string }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image src={imageUrl} alt={`Farmer ${name}`} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

// FIXED: Destructured 'icon' as 'Icon' (capitalized) to use it as a component
const CommunityInitiativeCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="text-primary text-4xl mb-4">
        {/* Now using the capitalized 'Icon' variable */}
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

// FIXED: Destructured 'icon' as 'Icon' and capitalized the JSX tag
const StatCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="text-primary text-4xl mb-4">
        {/* Changed <icon /> to <Icon /> */}
        <Icon size={48} />
      </div>
      <div className="text-white text-3xl font-bold">{value}</div>
      <p className="text-gray-300">{title}</p>
    </motion.div>
  );
};

// --- SECTIONS ---

const AwardsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 md:py-32 bg-black"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-heading text-white mb-12 text-center">Awards and Recognition</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Award className="text-primary text-4xl mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Award Title {index}</h3>
              <p className="text-gray-300">Description of the award and its significance.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const FarmerStoriesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 md:py-32 bg-black"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-heading text-white mb-12 text-center">Our Farmers, Our Pride</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <FarmerStoryCard
            name="Ramesh Kumar"
            description="Ramesh has been supplying milk to Dhoodh Fresh for over 10 years. His dedication to quality and sustainable farming practices makes him a valuable partner."
            imageUrl="https://source.unsplash.com/500x300/?farmer,india"
          />
          <FarmerStoryCard
            name="Priya Sharma"
            description="Priya is a second-generation farmer who is passionate about using innovative technologies to improve milk production and animal welfare."
            imageUrl="https://source.unsplash.com/500x300/?farmer,woman"
          />
          <FarmerStoryCard
            name="Arjun Singh"
            description="Arjun is committed to preserving traditional farming methods while adopting modern techniques to ensure the highest quality milk."
            imageUrl="https://source.unsplash.com/500x300/?farmer,portrait"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

const CommunityInitiativesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-heading text-white mb-12 text-center">Giving Back to Our Community</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <CommunityInitiativeCard
            title="Education Programs"
            description="Supporting local schools with resources and educational programs on nutrition and healthy living."
            icon={Lightbulb}
          />
          <CommunityInitiativeCard
            title="Community Support"
            description="Providing financial assistance and resources to families in need within our farming communities."
            icon={Users}
          />
          <CommunityInitiativeCard
            title="Healthcare Initiatives"
            description="Partnering with local clinics to provide access to healthcare services and promote overall well-being."
            icon={ImagePlus}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

const SustainablePracticesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 md:py-32 bg-black"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-heading text-white mb-12 text-center">Sustainability at Our Core</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <CommunityInitiativeCard
            title="Eco-Friendly Packaging"
            description="Using sustainable and recyclable packaging materials to minimize our environmental impact."
            icon={Recycle}
          />
          <CommunityInitiativeCard
            title="Responsible Farming"
            description="Promoting responsible farming practices that conserve water, reduce waste, and protect the environment."
            icon={ImagePlus}
          />
          <CommunityInitiativeCard
            title="Carbon Footprint Reduction"
            description="Implementing measures to reduce our carbon footprint and promote a more sustainable future."
            icon={Lightbulb}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

const EmploymentSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-heading text-white mb-12 text-center">Creating Local Jobs</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <StatCard title="Direct Employees" value="250+" icon={User2} />
          <StatCard title="Indirect Jobs Created" value="500+" icon={Users} />
          <StatCard title="Supporting Families" value="1000+" icon={Users} />
        </motion.div>
      </div>
    </motion.section>
  );
};

const Page = () => {
  return (
    <div className="bg-black text-white">
      <FarmerStoriesSection />
      <CommunityInitiativesSection />
      <SustainablePracticesSection />
      <EmploymentSection />
      <AwardsSection />
    </div>
  );
};

export default Page;
