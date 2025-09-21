"use client";
import Home from "@/components/Home/Home";
import { motion } from "framer-motion";
import CursorDark from "@/components/Global/CursorDark";
import PortfolioContent from "@/components/Portfolio/PortfolioContent";
import Footer from "@/components/Global/Footer";

export default function Page() {
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
          <Home />
        </motion.div>
        <Footer />
    </div>
  );
}
