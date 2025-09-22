import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		"The Future of Neuromorphic Computing" - exploring how brain-inspired chips could revolutionize AI efficiency and power consumption. Published in IEEE Spectrum.
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		"Why Silicon Valley Needs More Hardware Engineers" - my thoughts on the critical shortage of hardware talent in tech and how it's shaping the future of innovation.
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		"Building Energy-Efficient AI: Lessons from Nature" - examining how biological systems achieve incredible efficiency and what we can learn for next-gen computing.
	</motion.li>
);

const Item4 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className="text-slate-500">04</p>
        <Link text="View Full Reading List →" href="/reading" className="text-xl font-medium"/>
    </motion.li>
);

const ReadingList = [Item1, Item2, Item3, Item4];

export default ReadingList;