"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  motto: string;
  image: string;
}

const president: TeamMember = {
  name: "John Doe",
  role: "President",
  email: "president@placexp.com",
  motto: "Empowering students to achieve their dream careers",
  image: "/placeholder.svg?height=400&width=400",
};

const teamMembers: TeamMember[] = [
  {
    name: "Jane Smith",
    role: "Vice President",
    email: "vp@placexp.com",
    motto: "Building bridges between students and industry",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mike Johnson",
    role: "Technical Lead",
    email: "tech@placexp.com",
    motto: "Innovation through collaboration",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Williams",
    role: "Events Coordinator",
    email: "events@placexp.com",
    motto: "Creating meaningful connections",
    image: "/placeholder.svg?height=400&width=400",
  },
  // Add more team members as needed
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="bg-[#0300145e] border-[#7042f861] text-gray-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
          <div className="text-center">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-white">{member.role}</p>
            <p className="text-sm text-gray-400 mt-1">{member.email}</p>
            <p className="mt-4 italic">&quot;{member.motto}&quot;</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TeamPage() {
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
            Meet Our Team
          </h1>
          <p className="text-gray-300 mt-4">
            Dedicated to helping students achieve their career goals
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <TeamMemberCard member={president} />
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

