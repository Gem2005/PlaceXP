const Stats = () => {
  return (
    <section className="w-full py-12 md:py-10 lg:py-32 relative" id="stats">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              500+
            </h3>
            <p className="text-gray-300 font-medium">Successful Placements</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              50+
            </h3>
            <p className="text-gray-300 font-medium">Partner Companies</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              200+
            </h3>
            <p className="text-gray-300 font-medium">Alumni Network</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 z-[-1]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" autoPlay loop muted>
            <source src="path/to/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Stats;