import CursorDark from "@/components/Global/CursorDark";
import HomeContent from "@/components/Home/HomeContent";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <CursorDark />
            <HomeContent />
        </motion.div>
    );
}