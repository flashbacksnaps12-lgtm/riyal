const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

const trendingPackages = [
  {
    id: 1,
    name: 'Char Dham Tour Package',
    duration: '9 Nights / 10 Days',
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    includes: ['Cab Transfers', 'Hotel Stay', 'Meals', 'Darshan & Guidance'],
  },
  {
    id: 2,
    name: 'Amarnath Tour Package',
    duration: '4 Nights / 5 Days',
    highlights: ['Srinagar', 'Baltal', 'Amarnath Cave', 'Helicopter Option Available'],
    includes: ['Cab Transfers', 'Hotel Stay', 'Meals', 'Yatra Assistance'],
  },
  {
    id: 3,
    name: 'Vaishno Devi Tour Package',
    duration: '2 Nights / 3 Days',
    highlights: ['Katra'],
    includes: ['Cab Transfers', 'Hotel Stay', 'Meals', 'Yatra Assistance', 'Sightseeing'],
  },
  {
    id: 4,
    name: 'Haridwar Tour Package',
    duration: '2 Nights / 3 Days',
    highlights: ['Spiritual sightseeing', 'Comfortable stay', 'Guided assistance'],
    includes: ['Cab Transfers', 'Hotel Stay', 'Meals'],
  },
];

export default function TrendingPackagesSection() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 md:space-y-6 mb-8 md:mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">
            Trending Tour Packages
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1A1A1A] leading-relaxed">
            At <strong>Rajdani Travels</strong>, We Believe That Travel Is More Than Just Ticking Off Destinations—It&apos;s About Creating Unforgettable Experiences, Exploring New Cultures, And Discovering The Beauty Our World Has To Offer. Whether You&apos;re Dreaming Of Snow-Capped Mountains, Golden Deserts, Sacred Shrines, Or Vibrant Cities, <strong>We&apos;re Here To Make Your Journey Seamless, Affordable, And Truly Special.</strong>
          </p>
        </div>

        {/* Package Cards - 4 in one row on desktop, 1 per row on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white flex flex-col text-center p-4 md:p-6 border border-gray-200 rounded"
            >
              {/* Image Placeholder */}
              <div className="w-full h-32 md:h-40 bg-gray-200 flex items-center justify-center mb-3 md:mb-4 -mx-4 md:-mx-6 -mt-4 md:-mt-6 rounded-t">
                <span className="text-4xl md:text-5xl text-gray-400">□</span>
              </div>

              {/* Card Title */}
              <h3 className="text-sm md:text-base font-bold text-[#1A1A1A] mb-2 text-balance">{pkg.name}</h3>

              {/* Duration */}
              <p className="text-xs font-bold text-[#1A1A1A] mb-2 md:mb-3">{pkg.duration}</p>

              {/* Itinerary Line */}
              <p className="text-xs text-[#666666] mb-2 md:mb-3 leading-snug">
                Itinerary: {pkg.highlights.map((h) => {
                  if (h === 'Yamunotri') return '📍 Yamunotri';
                  if (h === 'Gangotri') return '→ Gangotri';
                  if (h === 'Kedarnath') return '→ Kedarnath';
                  if (h === 'Badrinath') return '→ Badrinath';
                  if (h === 'Srinagar') return '📍 Srinagar';
                  if (h === 'Baltal') return '→ Baltal';
                  if (h === 'Amarnath Cave') return '→ Amarnath Cave';
                  if (h === 'Helicopter Option Available') return '🚁 Helicopter Option Available';
                  if (h === 'Katra') return '📍 Katra (2N)';
                  if (h === 'Spiritual sightseeing') return '📍 Haridwar (2N)';
                  return h;
                }).join(' ')}
              </p>

              {/* Includes */}
              <p className="text-xs text-[#666666] mb-2 md:mb-3 leading-snug">
                {pkg.includes.map((item, idx) => {
                  const icon = 
                    item === 'Cab Transfers' ? '🚗' :
                    item === 'Hotel Stay' ? '🏨' :
                    item === 'Meals' ? '🍽️' :
                    item === 'Darshan & Guidance' ? '🙏' :
                    item === 'Yatra Assistance' ? '🧭' :
                    item === 'Sightseeing' ? '👁️' : '✓';
                  return `${icon} ${item}${idx < pkg.includes.length - 1 ? ' | ' : ''}`;
                }).join('')}
              </p>

              {/* Footer Text */}
              <p className="text-xs text-[#666666] mb-3 md:mb-4">
                {pkg.name.includes('Char') && 'Your Divine Yatra Partner.'}
                {pkg.name.includes('Amarnath') && 'Your Divine Yatra Partner – Rajdani Travels.'}
                {pkg.name.includes('Vaishno') && 'Your Divine Yatra Partner – Rajdani Travels.'}
                {pkg.name.includes('Haridwar') && 'Experience Divine Vibes with Rajdani Budget-Friendly & Soul-Enriching.'}
              </p>

              {/* Book Now Button */}
              <button 
                onClick={() => sendToWhatsApp(`Hey Rajdani Travels! I want to book ${pkg.name}.`)}
                className="w-full px-4 md:px-6 py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-sm border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition mt-auto text-xs md:text-sm cursor-pointer"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
