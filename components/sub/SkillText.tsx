"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { GraduationCap } from 'lucide-react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="py-[8px] px-[7px] border border-[#7042f861] opacity-[0.9] rounded-full"
      >
        <div className="flex items-center gap-2">
          <GraduationCap className="text-primary h-5 w-5" />
          <h1 className="text-[13px] text-gray-300">
            Comprehensive Career Preparation
          </h1>
        </div>
      </motion.div>
      
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className='text-3xl sm:text-4xl text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Everything You Need to Succeed
      </motion.div>
      
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className='text-gray-300 text-lg mb-10 mt-[10px] text-center max-w-2xl'
      >
        From resume building to mock interviews, we provide all the tools and resources you need
      </motion.div>
    </div>
  )
}

export default SkillText

