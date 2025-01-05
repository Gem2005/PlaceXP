import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    image: "/placeholder.svg?height=400&width=400",
    testimonial: "PlaceXP was instrumental in my placement journey. The alumni insights and interview experiences helped me prepare effectively for my dream role at Google."
  },
  {
    name: "Rahul Patel",
    role: "Product Manager",
    company: "Microsoft",
    image: "/placeholder.svg?height=400&width=400",
    testimonial: "The mentorship and guidance I received through PlaceXP were invaluable. The platform's resources and community support made all the difference in my placement preparation."
  },
  {
    name: "Ananya Singh",
    role: "Data Scientist",
    company: "Amazon",
    image: "/placeholder.svg?height=400&width=400",
    testimonial: "Thanks to PlaceXP's comprehensive interview preparation resources and alumni network, I was able to crack my interviews and secure a position at my dream company."
  }
];

const TestimonialCard = ({ name, role, company, image, testimonial }: TestimonialProps) => {
  return (
    <Card className="bg-[#0300145e] border-[#7042f861] text-gray-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-gray-400 italic mb-4">&quot;{testimonial}&quot;</p>
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-200">{name}</h4>
              <p className="text-sm text-gray-400">{role} at {company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative" id="testimonials">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Success Stories
        </h2>
        <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Hear from students who transformed their careers through PlaceXP
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute top-0 z-[-1]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
