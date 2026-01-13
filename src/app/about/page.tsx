"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
    MilkOff,
    HeartHandshake,
    Recycle,
    Users,
    Truck,
    CircleHelp,
    Sprout,
    Edit,
    CircleArrowLeft,
    TriangleAlert,
    MessageCircleQuestion,
    Factory,
    Droplets,
    Cone,
    Leaf,
    Milk,
    Timer,
    ShieldCheck,
    Trees,
} from "lucide-react";

// ===================================================================================
// SUB-COMPONENTS
// (Defined BEFORE main Page component)
// ===================================================================================

const FloatingShape = () => {
    return (
        <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            style={{ rotate: "45deg" }}
            animate={{
                x: [0, 50, 0, -50, 0],
                y: [0, -30, 0, 30, 0],
                rotate: [0, 360],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className="text-Foreground font-Heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
            {children}
        </h2>
    );
};

const StaggeredText = ({ text }: { text: string }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };


    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", gap: "10px" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    style={{ overflow: "hidden", display: "inline-block" }}
                    variants={child}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="bg-Muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};


// ===================================================================================
// MAIN PAGE COMPONENT
// ===================================================================================

export default function Page() {
    return (
        <div className="bg-Background text-Foreground">
            <FloatingShape />
            <main>
                <OurStorySection />
                <OurValuesSection />
                <OurProcessSection />
                <OurTeamSection />
                <SustainabilitySection />
            </main>
        </div>
    );
}

// ===================================================================================
// SECTION COMPONENTS
// ===================================================================================

const OurStorySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="order-2 md:order-1">
                        <SectionHeading>Our Story</SectionHeading>
                        <motion.p className="text-Foreground mt-4 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            Dhoodh Fresh was born from a simple desire: to provide families in Bangalore with access to 100% shudd milk, straight from the farm. We believe in transparency, sustainability, and the unwavering commitment to quality. Our journey began with a small group of farmers dedicated to ethical practices and has grown into a community-driven initiative that prioritizes your health and well-being.
                        </motion.p>
                    </div>
                    <motion.div className="order-1 md:order-2" variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                        <Image
                            src="/milk-pouring.jpg"
                            alt="Milk Pouring"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-2xl shadow-black/20"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const OurValuesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section className="py-24 md:py-32 bg-Muted relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading>Our Values</SectionHeading>
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-3 gap-8 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <AnimatedCard>
                        <HeartHandshake className="text-Primary w-8 h-8 mb-2" />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">Integrity</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">We uphold the highest ethical standards in all our practices.</p>
                    </AnimatedCard>
                    <AnimatedCard>
                        <ShieldCheck className="text-Primary w-8 h-8 mb-2" />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">Quality</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">We are committed to delivering the freshest, purest milk.</p>
                    </AnimatedCard>
                    <AnimatedCard>
                        <Trees className="text-Primary w-8 h-8 mb-2" />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">Sustainability</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">We strive to minimize our environmental impact.</p>
                    </AnimatedCard>
                </motion.div>
            </div>
        </section>
    );
};

const OurProcessSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading>Our Process</SectionHeading>
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 gap-8 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div>
                        <Image
                            src="/dairy-farm.jpg"
                            alt="Dairy Farm"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-2xl shadow-black/20"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div>
                        <AnimatedCard>
                            <Timer className="text-Primary w-8 h-8 mb-2" />
                            <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">24-Hour Delivery</h3>
                            <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">Our milk is delivered within 24 hours of milking, ensuring maximum freshness.</p>
                        </AnimatedCard>
                        <AnimatedCard>
                            <Milk className="text-Primary w-8 h-8 mb-2" />
                            <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">Quality Checks</h3>
                            <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">Every batch undergoes rigorous testing to meet our high standards.</p>
                        </AnimatedCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const OurTeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section className="py-24 md:py-32 bg-Muted relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading>Our Team</SectionHeading>
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-4 gap-8 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <AnimatedCard>
                        <Image
                            src="/team-member-1.jpg"
                            alt="Team Member 1"
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-4"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)] text-center">Priya Sharma</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)] text-center">Dairy Manager</p>
                    </AnimatedCard>
                    <AnimatedCard>
                        <Image
                            src="/team-member-2.jpg"
                            alt="Team Member 2"
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-4"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)] text-center">Rahul Verma</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)] text-center">Quality Control</p>
                    </AnimatedCard>
                    <AnimatedCard>
                        <Image
                            src="/team-member-3.jpg"
                            alt="Team Member 3"
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-4"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)] text-center">Sneha Patel</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)] text-center">Farm Operations</p>
                    </AnimatedCard>
                    <AnimatedCard>
                        <Image
                            src="/team-member-4.jpg"
                            alt="Team Member 4"
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-4"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)] text-center">Vikram Singh</h3>
                        <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)] text-center">Logistics</p>
                    </AnimatedCard>
                </motion.div>
            </div>
        </section>
    );
};

const SustainabilitySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading>Sustainability</SectionHeading>
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 gap-8 items-center mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                        <Image
                            src="/sustainable-farm.jpg"
                            alt="Sustainable Farm"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-2xl shadow-black/20"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </motion.div>
                    <div>
                        <AnimatedCard>
                            <Recycle className="text-Primary w-8 h-8 mb-2" />
                            <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">Eco-Friendly Practices</h3>
                            <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">We use sustainable farming methods and minimize waste.</p>
                        </AnimatedCard>
                        <AnimatedCard>
                            <MilkOff className="text-Primary w-8 h-8 mb-2" />
                            <h3 className="text-Foreground font-bold text-[clamp(1.5rem,3vw,2rem)]">Ethical Treatment</h3>
                            <p className="text-Foreground mt-2 text-[clamp(1rem,2vw,1.25rem)]">We ensure the well-being of our Milks and promote humane practices.</p>
                        </AnimatedCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
