export default function TopContactBar() {
  return (
    <div className="bg-[#1A1A1A] text-white py-2 md:py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-start">
          <button className="px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
            +91 9876543210
          </button>
          <button className="px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold border-2 border-[#FBBF24] text-[#FBBF24] rounded-full hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition whitespace-nowrap">
            +91 9876543211
          </button>
        </div>
        <button className="px-4 md:px-6 py-1.5 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#FBBF24] hover:bg-[#F59E0B] transition whitespace-nowrap text-sm md:text-base">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
