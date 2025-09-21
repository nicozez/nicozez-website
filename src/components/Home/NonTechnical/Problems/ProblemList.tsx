import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants} className="border-geometric">
		<p className="text-slate-500">01</p>
		Developed bio-inspired algorithms for event cameras that mimic how the retina filters motion, reducing spurious events by significant levels (>95%) while preserving important object motion signals.
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants} className="border-geometric">
		<p className="text-slate-500">02</p>
		With Prof. Philip Levis, I led a signalling team to design custom USB-Ethernet conversion boards & send full-speed USB signal from 10ft to 150ft beyond standard spec @ <Link text="FLIGHT Project" href="https://code.stanford.edu/plevis/ee185"/>.
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants} className="border-geometric">
		<p className="text-slate-500">03</p>
		<Link text="View Writings →" href="/reading" className="text-lg font-medium"/>
	</motion.li>
);

const Item4 = () => (
    <motion.li variants={animations.itemVariants} className="border-geometric">
        <p className="text-slate-500">04</p>
        <Link text="View Full Portfolio →" href="/portfolio" className="text-lg font-medium"/>
    </motion.li>
);


const ProblemList = [Item1, Item2, Item3, Item4];

export default ProblemList;