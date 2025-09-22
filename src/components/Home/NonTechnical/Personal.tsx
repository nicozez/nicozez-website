import React from "react";
import Image from "next/image";
import ScrambleText from "@/components/Global/ScrambleText";
import { links } from "@/assets/links";
import { animations } from "@/assets/animations"
import { motion } from "framer-motion";
import Link from "@/components/Global/Link";

const Personal = () => {
	return (
		<div className="space-y-10">
			<div className="text-xl font-medium mb-4 text-orange-500">Hi, I'm Nicolas.</div>
			<ScrambleText text="21. at Stanford. Trying to learn and grow and build beautiful things with others. focussed on biological interfaces and hardware solutions to help humans regain sight and movement" settings={{ speed: 1 }} className="text-orange-500" />

			<motion.div animate={{ opacity: 1, x: 0 }}>
				<motion.ul variants={animations.containerVariants} initial="hidden" animate="show" className="space-y-10">
					<motion.li variants={animations.itemVariants} className="body">
						<Link text="nicozez@stanford.edu" href="mailto:nicozez@stanford.edu" />
					</motion.li>
					<motion.li variants={animations.itemVariants}>
						<Image src="/profile.jpg" alt="Nicolas Zezza" height={180} width={180} quality={85} priority={true} itemProp="image" />
					</motion.li>

					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText className="mb-2" text="Languages:" settings={{ speed: 1 }} />
                        <div>english</div>
                        <div>french</div>
					</motion.li>
					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText className="mb-2" text="Coursework:" settings={{ speed: 1 }} />
                        <div> Analog Circuits, Signal Processing, Embedded Systems, Digital System Design,t Linear Dynamical Systems</div>
					</motion.li>

					{/* social links */}
					<div className="space-y-3">
						<motion.li variants={animations.itemVariants} className="body">
							<div>Other places to find me:</div>
						</motion.li>
						<div className="sm:block sm:-space-y-5 flex flex-wrap">
							{links.map((social, index) => (
								<motion.li variants={animations.itemVariants} key={social.name}>
									<Link text={social.name} href={social.url} className="pr-2 space-x-1" />
									{index < links.length - 1 && <p className="pr-2 sm:pr-0 sm:invisible sm:block inline">•</p>}
								</motion.li>
							))}
						</div>
					</div>
				</motion.ul>
			</motion.div>
		</div>
	);
};

export default Personal;