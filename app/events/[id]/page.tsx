"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface EventImage {
  url: string;
  alt: string;
}

// This would typically come from an API or database
const eventDetails: { id: string; title: string; date: string; description: string; images: EventImage[] } = {
  id: "mock-interviews-2024",
  title: "Mock Interviews 2024",
  date: "March 15, 2024",
  description: "Join us for a day of mock interviews with industry professionals. Get valuable feedback on your interview skills and learn how to improve your performance.",
  images: [
    {
      url: "https://www.onrec.com/sites/onrec/directory/files/Blog-Popular-interview-questions.jpg",
      alt: "Students participating in mock interviews",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Industry professionals providing feedback",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Group discussion session",
    },
  ],
};

export default function EventDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === eventDetails.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? eventDetails.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            {eventDetails.title}
          </h1>
          <p className="text-white mt-2">{eventDetails.date}</p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="relative">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              <Image
                src={eventDetails.images[currentImageIndex].url}
                alt={eventDetails.images[currentImageIndex].alt}
                fill
                className="object-cover"
              />
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70"
              onClick={previousImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {eventDetails.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.7)}
          initial="hidden"
          animate="visible"
          className="prose prose-invert max-w-none"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            {eventDetails.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
