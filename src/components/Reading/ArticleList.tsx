import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

interface ArticleDetails {
    title: string;
    shortDescription: string;
    fullContent?: string;
    link?: string;
    publication?: string;
    date?: string;
    tags?: string[];
    readTime?: string;
}

const Article = ({ article }: { article: ArticleDetails }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            variants={animations.itemVariants}
            className="border-b border-slate-200 py-6 geometric-accent"
        >
            <div 
                className="flex justify-between items-start cursor-pointer" 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div>
                    <h3 className="text-lg mb-2">
                        {article.title}
                        {article.link && <Link text="↗" href={article.link} className="ml-2" />}
                    </h3>
                    <p className="text-slate-600 mb-2">{article.shortDescription}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                        {article.publication && <span>{article.publication}</span>}
                        {article.date && <span>{article.date}</span>}
                        {article.readTime && <span>{article.readTime}</span>}
                    </div>
                    {article.tags && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {article.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-slate-400 text-xl"
                >
                    ↓
                </motion.span>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 space-y-4"
                    >
                        {article.fullContent && (
                            <div className="text-slate-600 leading-relaxed">
                                {article.fullContent}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function ArticleList() {
    const articles: ArticleDetails[] = [
        {
            title: "TBD",
            shortDescription: "Coming soon.",
            fullContent: "This section is currently under development. ",
            publication: "Personal Blog",
            date: "TBD",
            tags: ["Coming Soon", "Technology", "Engineering"],
            readTime: "TBD"
        },
        {
            title: "Interesting article: Why Silicon Valley Needs More Hardware Engineers",
            shortDescription: "...",
            fullContent: "The tech industry is facing a critical shortage of hardware engineers, and this gap is becoming increasingly problematic as we push the boundaries of what's possible with software alone. From AI accelerators to quantum computers, the next generation of breakthrough technologies will require deep hardware expertise. In this piece, I discuss why hardware engineering has been undervalued, the unique challenges of hardware development, and what companies and educational institutions can do to attract more talent to this crucial field. The future of technology depends on our ability to bridge the software-hardware divide.",
            publication: "...",
            date: "Nov 2024",
            tags: ["Hardware", "Engineering", "Career", "Industry"],
            readTime: "6 min read"
        }
    ];

    return (
        <div className="space-y-2">
            {articles.map((article, index) => (
                <Article key={index} article={article} />
            ))}
        </div>
    );
}