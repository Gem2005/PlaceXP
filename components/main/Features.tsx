import { Users2, BookOpen, Building2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Why Choose PlaceXP?
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get everything you need to succeed in your placement journey
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card className="bg-[#0300145e] border-[#7042f861] text-gray-300">
            <CardContent className="p-6">
              <Users2 className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">Alumni Network</h3>
              <p className="text-gray-400">
                Connect with successful alumni from top companies and learn from their experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0300145e] border-[#7042f861] text-gray-300">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 mb-4 text-cyan-500" />
              <h3 className="text-xl font-bold mb-2">Interview Insights</h3>
              <p className="text-gray-400">
                Get detailed interview experiences and preparation strategies from placed students.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0300145e] border-[#7042f861] text-gray-300">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">Company Profiles</h3>
              <p className="text-gray-400">
                Access comprehensive information about companies visiting campus.
              </p>
            </CardContent>
          </Card>
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

export default Features;

