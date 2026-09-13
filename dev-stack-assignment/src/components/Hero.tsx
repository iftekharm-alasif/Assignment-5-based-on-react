import Heroimage from "./banner-stack.png"
export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[480px] max-w-[1080px] items-center gap-10 px-5 py-16 md:grid-cols-2">

        {/* Left Content */}
        <div>
         
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#172033] md:text-5xl">
            Build Your Ideal

            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Devolopment Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[500px] text-sm leading-6 text-gray-500">
            Discover modern technologies, explore powerful tools, and build
            your ideal development stack with Dev Stack.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 px-6 py-3 text-xs font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-200 px-6 py-3 text-xs font-semibold text-[#172033]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Banner */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[460px] overflow-hidden rounded-2xl">
            <img
              src={Heroimage}
              alt="Developer technology"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}