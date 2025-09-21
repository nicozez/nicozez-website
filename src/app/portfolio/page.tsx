"use client";
import { motion } from "framer-motion";
import CursorDark from "@/components/Global/CursorDark";
import PortfolioContent from "@/components/Portfolio/PortfolioContent";
import Footer from "@/components/Global/Footer";

export default function PortfolioPage() {
    return (
        <div style={{ 
            cursor: "none", 
            position: "relative", 
            minHeight: "100vh" 
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <CursorDark />
                <PortfolioContent />
            </motion.div>
            <Footer />
        </div>
    );
} 