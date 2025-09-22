import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		Marathon runner, Great Britain U19 Rowing Trialist (2022) + National Schools Rowing Champion (2019)
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		Consulted for the Dept. of Commerce on critical mineral sourcing solutions for magnet and battery manufacturing.
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		Ophthalmology research on ocular aging and rejuvenation technologies @ <Link text="Stanford School of Medicine" href="https://med.stanford.edu/wu.html"/> (2022) to help solve aging in the eye.
	</motion.li>
);

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		worked on projects @ <Link text="Inveztor" href="https://www.inveztor.io" /> (2023), <Link text="Balancell" href="https://balancell.com" /> (2023), <Link text="CCRMA" href="https://ccrma.stanford.edu" /> (2024), & <Link text="Virtualitics" href="https://virtualitics.com" /> (2024)
	</motion.li>
);

const PastList = [Item1, Item2, Item3, Item4];

export default PastList;