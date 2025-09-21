import React from "react"; 
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying Electrical Engineering & Creative Arts @ <Link text="Stanford" href="" />
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		Image Systems Research and Chip Design @ <Link text="Brains in Silicon" href="https://web.stanford.edu/group/brainsinsilicon/" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		helping run the Xfund Ethics Fellows Program, teaching Stanford undergrads how to make better entrepreneurial decisions @ <Link text="STVP" href="https://stvp.stanford.edu/xef/" />
	</motion.li>
);

const Item5 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">05</p>
		running some long distance races on the side, sometimes playing drums with my band.
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		Creating a film based on 500 interviews with Stanford Students 
	</motion.li>
);



const CurrentList = [Item1, Item2, Item3, Item4, Item5];

export default CurrentList;