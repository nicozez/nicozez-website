import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";
import Image from "next/image";

interface ProjectDetails {
    title: string;
    shortDescription: string;
    fullDescription?: string;
    link?: string;
    tech?: string[];
    collaborators?: string[];
    timeline?: string;
    outcomes?: string[];
    image?: string[];
}

// carousel function to scroll across multiple photos... 
function Carousel({ images, title }: { images: string[]; title: string }) {
    const [index, setIndex] = useState(0);
    const hasImages = images && images.length > 0;
  
    // Guard
    if (!hasImages) return null;
  
    // Keep index in range
    const clamp = (i: number) => (i + images.length) % images.length;
  
    const next = () => setIndex((i) => clamp(i + 1));
    const prev = () => setIndex((i) => clamp(i - 1));
    const goTo = (i: number) => setIndex(clamp(i));
  
    // Touch/swipe support
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const minSwipe = 50;
  
    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
      setTouchStartX(e.changedTouches[0].clientX);
    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
      setTouchEndX(e.changedTouches[0].clientX);
    const onTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        const delta = touchStartX - touchEndX;
        if (Math.abs(delta) > minSwipe) {
          delta > 0 ? next() : prev();
        }
      }
      setTouchStartX(null);
      setTouchEndX(null);
    };
  
    // Keyboard arrows
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
  
    return (
      <div
        className="relative w-full rounded-xl overflow-hidden"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label={`${title} image carousel`}
      >
        {/* Slide */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div className="aspect-[4/3] w-full bg-slate-100">
              <Image
                src={images[index]}
                alt={`${title} - Image ${index + 1}`}
                width={1200}
                height={900}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>
  
        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-2 shadow hover:bg-white transition"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-2 shadow hover:bg-white transition"
        >
          ›
        </button>
  
        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={
                "h-2 w-2 rounded-full transition " +
                (i === index ? "bg-white shadow ring-1 ring-black/10 w-5" : "bg-white/60 hover:bg-white/90")
              }
            />
          ))}
        </div>
      </div>
    );
  }
  


const Project = ({ project }: { project: ProjectDetails }) => {
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
                        {project.title}
                    </h3>
                    <p className="text-slate-600">{project.shortDescription}</p>
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
                        {project.fullDescription && (
                            <div className="text-slate-600">
                                {project.fullDescription}
                            </div>
                        )}

                        {project.link && (
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Codebase:</span>
                                <Link 
                                    text={project.title.includes("FLIGHT") ? "FLIGHT repository ↗" : 
                                          project.title.includes("SiliconRetina") ? "GitHub repository ↗" :
                                          project.title.includes("EE108") ? "Project details ↗" : "View ↗"} 
                                    href={project.link} 
                                    className="flex items-center gap-1" 
                                />
                            </div>
                        )}

                        {project.image && project.image.length > 0 && (
                        <div className="mb-6">
                            <Carousel images={project.image} title={project.title} />
                        </div>
                        )}
                        
                        {project.tech && (
                            <div>
                                <span className="text-slate-400">Technologies: </span>
                                <span className="text-slate-600">{project.tech.join(", ")}</span>
                            </div>
                        )}

                        {project.collaborators && (
                            <div>
                                <span className="text-slate-400">Collaborators: </span>
                                <span className="text-slate-600">{project.collaborators.join(", ")}</span>
                            </div>
                        )}

                        {project.timeline && (
                            <div>
                                <span className="text-slate-400">Timeline: </span>
                                <span className="text-slate-600">{project.timeline}</span>
                            </div>
                        )}

                        {project.outcomes && (
                            <div>
                                <span className="text-slate-400">Key Outcomes:</span>
                                <ul className="list-disc list-inside text-slate-600 mt-2">
                                    {project.outcomes.map((outcome, index) => (
                                        <li key={index}>{outcome}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function ProjectList() {
    const projects: ProjectDetails[] = [
        {
            title: "FLIGHT Project: USB Signal Extension System",
            shortDescription: "Led signalling team to extend USB capabilities beyond standard spec",
            fullDescription: "Designed custom USB-Ethernet signalling conversion boards (USBA to RJ45) to transmit data/power to flyers, employing passive & active terminations sending full-speed USB signal beyond standard spec over 150ft. Integrated expansive circuit protections and ensured robust transmission through in-depth oscilloscope/VNA testing, fine-tuning termination strategies, and integrating custom active IC layouts in KiCad.",
            image: [
                "/projects/FLIGHT/FLIGHT_setup.png",
                "/projects/FLIGHT/shell.png",
                "/projects/FLIGHT/board.png",
              ],
            link: "https://code.stanford.edu/plevis/ee185",
            tech: ["USB Protocol", "Ethernet", "PCB Design", "Signal Processing", "KiCad", "Oscilloscope", "VNA Testing"],
            collaborators: ["Prof. Philip Levis", "FLIGHT Project Team"],
            timeline: "Sep 2024 - Present",
            outcomes: [
                "Extended USB signal transmission from 10ft to 150ft while maintaining full speed",
                "Designed and implemented custom conversion boards with robust protection circuits",
                "Successfully integrated and tested with oscilloscope/VNA measurements"
            ]
        },
        {
            title: "Retinal-Inspired Motion Suppression for Event Cameras",
            shortDescription: "Bio-inspired algorithms that mimic retinal sensitivity to object motion in specific Retinal Ganglion Cells to reduce camera motion noise while preserving object motion",
            fullDescription: "Developed a very simple and comprehensive signal processing pipeline that leverages the sparsity of true object events to consisting of a convolution with a specific spatiotemporal filter, rectification of the signal at a per pixel basis and pooling to get centre and surround traces of signal that response to the central vs surround nature of the receptive fields of wide-field amacrines and OFF bipolar cells. If centre and surround traces occur within the same period of time, we suppress the signals. If there is a differential between the two signals, corresponding to local object motion being perceived, we keep the signal. This bio-inspired approach significantly reduces unwanted events from camera egomotion while preserving important object motion signals.",
            image: [
                "/projects/retinal/poster.png",
            ],
            link: "https://github.com/nicozez/SiliconRetina-",
            tech: ["C++", "Python", "Computer Vision", "Signal Processing", "Spatiotemporal FIltering", "Event Cameras", "Retinal Computation", "Natural Motion Statistics"],
            collaborators: ["Oleh Ivankiv", "Leo Liu"],
            timeline: "June 2025 - August 2025",
            outcomes: [
                "Developed complete spatiotemporal filtering pipeline for event camera data",
                "Implemented bio-inspired motion suppression algorithms",
                "Achieved significant noise reduction while preserving object motion signals",
                "Created simulation framework for testing retinal-inspired processing"
            ]
        },
        {
            title: "EE108 FPGA Music Player with Advanced Audio Features",
            shortDescription: "Developed a comprehensive music player on Xilinx Virtex-II Pro XC2VP30 FPGA with chords, harmonics, and adjustable waveform display",
            fullDescription: "Built a simple music player system on FPGA hardware featuring multi-frequency chord functionality that combines wave generator, frequency generator, and tuner outputs. Implemented harmonic generation capabilities to produce different instrument sounds including guitar and trumpet tones. Created an adjustable waveform display system with an add-on screen mount that visualizes sine waves and notes in real-time, with user-controllable waveform sizing and stretching parameters. Maintained traditional music player interface while adding advanced visualization and audio processing features.",
            image: [
                "/projects/EE108/FPGA.png",
                "/projects/EE108/spec_sheet.png",
            ],
            tech: ["FPGA", "Verilog/VHDL", "Xilinx Virtex-II Pro XC2VP30", "Digital Signal Processing", "Audio Processing", "Wave Generation", "Harmonic Synthesis", "Real-time Display"],
            collaborators: ["Avni Vats, Sebastian Marsoner "],
            timeline: "Autumn 2024 Academic Term",
            outcomes: [
                "Successfully implemented multi-frequency chord functionality combining multiple audio sources",
                "Developed harmonic generation system for instrument sound synthesis",
                "Created adjustable real-time waveform visualization with user controls",
                "Integrated traditional music player interface with advanced FPGA-based features"
            ]
        },
        {
          title: "TBD",
          shortDescription: "More Projects Loading...",
          fullDescription: "",
      },
    ];

    return (
        <div className="space-y-2">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}