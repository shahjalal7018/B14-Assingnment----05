
import Logo from "../assets/banner-stack.png"
export default function Hero() {
  return (
    <section className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-16 md:flex-row md:py-24">
        
        {/* Left Content */}
        <div className="max-w-xl text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base text-gray-500 sm:text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, 
            compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-md md:w-1/2">
          <img src={Logo} alt="" 
           
            className="w-full object-contain"
          />
        </div>
      </div>

    
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-6 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </section>
  );
}