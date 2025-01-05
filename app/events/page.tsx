"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
}

const events: Event[] = [
  {
    id: "mock-interviews-2024",
    title: "Mock Interviews 2024",
    date: "March 15, 2024",
    description: "Practice interviews with industry professionals",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "resume-workshop",
    title: "Resume Building Workshop",
    date: "April 1, 2024",
    description: "Learn how to create an impressive resume",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  // Add more events as needed
];

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.id}`}>
      <Card className="bg-[#0300145e] border-[#7042f861] text-grey-300 hover:border-primary transition-colors">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <Image
              src={event.thumbnail}
              alt={event.title}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-48"
            />
            <div>
              <h3 className="text-xl text-white font-bold">{event.title}</h3>
              <p className="text-white">{event.date}</p>
              <p className="text-gray-400 mt-2">{event.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Our Events
          </h1>
          <p className="text-gray-300 mt-4">
            Join us for exciting events and workshops
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

