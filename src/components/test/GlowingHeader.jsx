import { AnimatedText } from "./AnimatedText";

export const GlowingHeader = () => {
  return (
    <div className="min-h-screen bg-gray-50 m-2 ">
      <div className="max-w-xl mx-auto">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center">
            <div className="flex justify-center items-center">
              <AnimatedText text="Karthik weds Sharmi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
