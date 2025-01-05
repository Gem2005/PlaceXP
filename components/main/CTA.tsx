import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join PlaceXP today and take the first step towards your dream career.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300">
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 z-[-1]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            autoPlay
            loop
            muted
          >
            <source src="path/to/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default CTA;
