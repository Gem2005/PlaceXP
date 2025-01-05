"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { GraduationCap } from 'lucide-react';

const flipAnimation = {
  hidden: { opacity: 0, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover opacity-30"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      
      <div className="relative z-[20] flex h-full w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center max-w-3xl text-center gap-8 px-4 md:px-0">
          <div className="flex items-center py-10 px-4">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={flipAnimation}
              className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Place
            </motion.span>
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={flipAnimation}
              className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              X
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={flipAnimation}
              className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              P
            </motion.span>
          </div>

          <motion.h1 
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Your Path to Success Starts Here
          </motion.h1>

          <motion.p 
            variants={slideInFromRight(0.8)}
            initial="hidden"
            animate="visible"
            className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Connect with successful alumni, gain valuable insights, and pave your way to 
            dream placements and internships.
          </motion.p>

          <motion.div 
            variants={slideInFromLeft(1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 min-[400px]:flex-row"
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-black-300">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
