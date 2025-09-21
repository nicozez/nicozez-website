import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";
import ScrambleText from "@/components/Global/ScrambleText";
import ProjectList from "./ProjectList";

export default function PortfolioContent() {
    return (
        <main className="flex min-h-screen flex-col items-center p-20 sm:p-8">
            <div className="w-full max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10"
                >
                    <Link text="← Back" href="/" className="mb-10 block" />
                    <ScrambleText 
                        text="Portfolio (in no particular order)" 
                        settings={{ speed: 0.6, tick: 10 }} 
                        className="text-2xl mb-5"
                    />
                </motion.div>
                <motion.div
                    variants={animations.containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <ProjectList />
                </motion.div>
            </div>
        </main>
    );
} 