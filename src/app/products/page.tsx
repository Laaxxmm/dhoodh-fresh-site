"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
    Droplets,
    Cookie,
    Circle,
    CircleHelp,
    Edit,
    CircleArrowLeft,
    TriangleAlert,
    MessageCircleQuestion,
    Sprout,
    Factory,
    Cone,
    Milk,
    IceCream,
    Sun,
    Moon,
    LayoutGrid,
    ArrowRight,
    Info,
    ShoppingCart,
    Leaf,
    Waves,
    CopyCheck,
    Percent,
    PackageCheck,
    Package,
    Boxes,
    Apple,
    Clock4,
    Clock3,
    HeartHandshake,
} from "lucide-react";

// Utility function for staggering animations
const staggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

// Sub-Component: ProductCard
const ProductCard = ({ product }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative rounded-2xl overflow-hidden Moon-2xl Moon-black/10 hover:Moon-2xl hover:Moon-black/20 transition-Moon duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: "#1A1A1A" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    <button className="bg-primary text-black py-2 px-4 rounded-full hover:bg-secondary transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    View Details
                </motion.div>
            )}
        </motion.div>
    );
};

// Sub-Component: ProductSection
const ProductSection = ({ title, products }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-24 md:py-32" style={{ backgroundColor: "#000000" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-[clamp(1.75rem,5vw,3.5rem)] font-lexend font-bold text-white mb-12 text-center"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    ref={ref}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {products.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// Main Page Component
export default function Page() {
    const milkProducts = [
        {
            id: 1,
            name: "Dhoodh Fresh Milk",
            description: "100% Shudd Milk, delivered fresh daily.",
            price: 60,
            image: "/milk.jpg",
        },
        {
            id: 2,
            name: "Dhoodh Fresh Organic Milk",
            description: "Certified organic milk from grass-fed cows.",
            price: 80,
            image: "/organic-milk.jpg",
        },
        {
            id: 3,
            name: "Dhoodh Fresh Skimmed Milk",
            description: "Low-fat milk option for a healthy lifestyle.",
            price: 55,
            image: "/skimmed-milk.jpg",
        },
    ];

    const IceCreamProducts = [
        {
            id: 4,
            name: "Dhoodh Fresh IceCream",
            description: "Creamy and delicious IceCream, perfect for breakfast.",
            price: 40,
            image: "/IceCream.jpg",
        },
        {
            id: 5,
            name: "Dhoodh Fresh Greek IceCream",
            description: "Thick and rich Greek IceCream with high protein.",
            price: 50,
            image: "/greek-IceCream.jpg",
        },
        {
            id: 6,
            name: "Dhoodh Fresh Flavored IceCream",
            description: "IceCream with natural fruit flavors, a tasty treat.",
            price: 45,
            image: "/flavored-IceCream.jpg",
        },
    ];

    const gheeProducts = [
        {
            id: 7,
            name: "Dhoodh Fresh Ghee",
            description: "Pure and aromatic ghee made from cow's milk.",
            price: 250,
            image: "/ghee.jpg",
        },
        {
            id: 8,
            name: "Dhoodh Fresh Organic Ghee",
            description: "Organic ghee with rich flavor and health benefits.",
            price: 300,
            image: "/organic-ghee.jpg",
        },
        {
            id: 9,
            name: "Dhoodh Fresh Desi Ghee",
            description: "Traditional desi ghee, perfect for cooking.",
            price: 280,
            image: "/desi-ghee.jpg",
        },
    ];

    const paneerProducts = [
        {
            id: 10,
            name: "Dhoodh Fresh Paneer",
            description: "Soft and fresh paneer, ideal for Indian dishes.",
            price: 120,
            image: "/paneer.jpg",
        },
        {
            id: 11,
            name: "Dhoodh Fresh Tofu",
            description: "Organic Tofu with rich flavor and health benefits.",
            price: 130,
            image: "/organic-paneer.jpg",
        },
        {
            id: 12,
            name: "Dhoodh Fresh Malai Paneer",
            description: "Traditional Malai Paneer, perfect for cooking.",
            price: 140,
            image: "/malai-paneer.jpg",
        },
    ];

    return (
        <div className="bg-black text-white">
            <ProductSection title="Fresh Milk" products={milkProducts} />
            <ProductSection title="Delicious IceCream" products={IceCreamProducts} />
            <ProductSection title="Pure Ghee" products={gheeProducts} />
            <ProductSection title="Soft Paneer" products={paneerProducts} />
        </div>
    );
}
