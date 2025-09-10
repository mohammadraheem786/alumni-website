import React from "react";

const PricingSection = () => (
  <section className="w-full flex flex-col items-center bg-white pt-12 pb-8 px-4">
    {/* Heading */}
    <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-8 leading-snug" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
      Get your Alumni Membership and start exploring and<br className="hidden md:block" /> experimenting without the fear of failure!
    </h2>

    {/* Pricing Plans Heading */}
    <div className="w-full max-w-4xl">
      <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-2" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        Pricing Plans
      </h3>
      <p className="text-black text-base md:text-lg font-normal mb-6" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        Choose a plan that fits your needs:
      </p>
    </div>

    {/* Pricing Cards Row */}
    <div className="flex flex-row justify-center items-center w-full max-w-4xl gap-6 mb-10">
      {/* Monthly */}
      <div className="flex-1 bg-black text-white py-7 md:py-7 flex flex-col items-center justify-center border-0" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        <span className="text-2xl md:text-3xl font-bold mb-1">Monthly</span>
        <span className="text-xl md:text-2xl font-bold mb-1">₹6,000 + GST</span>
        <span className="text-sm md:text-base font-normal mt-1 opacity-80">
          (₹3,000 + GST with alumni discount)
        </span>
      </div>
      {/* Annual */}
      <div className="flex-1 bg-red-600 text-white py-10 md:py-7 flex flex-col items-center justify-center border-0 z-10 scale-110 -mx-5 rounded-none shadow-lg" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        <span className="text-2xl md:text-3xl font-bold mb-1">Annually</span>
        <span className="text-xl md:text-2xl font-bold mb-1">₹48,000 + GST</span>
        <span className="text-sm md:text-base font-normal mt-1 opacity-90">
          (₹24,000 + GST with alumni discount)
        </span>
      </div>
      {/* Quarterly */}
      <div className="flex-1 bg-black text-white py-7 md:py-7 flex flex-col items-center justify-center border-0" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        <span className="text-2xl md:text-3xl font-bold mb-1">Quarterly</span>
        <span className="text-xl md:text-2xl font-bold mb-1">₹15,000 + GST</span>
        <span className="text-sm md:text-base font-normal mt-1 opacity-80">
          (₹7,500 + GST with alumni discount)
        </span>
      </div>
    </div>

    {/* Join Us Today Section */}
    <div className="w-full max-w-3xl mb-10">
      <h4 className="text-black text-2xl md:text-3xl font-bold mb-2" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        Join Us Today!
      </h4>
      <p className="text-black text-base md:text-lg font-normal mb-2" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        Take advantage of this exclusive offer and continue your journey with T-Works.<br />
        If you have any questions or need further assistance, feel free to contact us.
      </p>
      <p className="text-black text-base md:text-lg font-normal mb-2" style={{fontFamily: "Montserrat, Arial, sans-serif"}}>
        We look forward to seeing you back in our community!<br />
        Thank you for being a part of T-Works.<br />
        Become a Member
      </p>
    </div>

    {/* Apply Now Button */}
    <div className="w-full max-w-3xl flex flex-row items-start mb-8">
      <button
        className="bg-red-600 text-white font-bold text-2xl md:text-2xl px-10 py-4 rounded-none shadow-none transition hover:bg-red-700"
        style={{fontFamily: "Montserrat, Arial, sans-serif"}}
      >
        Apply Now!
      </button>
    </div>

   {/* Divider */}
<hr className="w-full max-w-3xl border-black border-t-[2.5px] mt-6 mb-4" />

{/* FAQ Section */}
<div className="w-full flex flex-col items-center mb-4">
  {/* Top horizontal line */}
  <hr className="w-full max-w-2xl border-black border-t-[2px] mt-2 mb-2" />
  
  {/* FAQ's text centered and bold */}
  <h2
    className="text-black text-2xl md:text-3xl font-bold text-center tracking-wide"
    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
  >
    FAQ&rsquo;S
  </h2>
  
  {/* Bottom horizontal line */}
  <hr className="w-full max-w-2xl border-black border-t-[2px] mt-2 mb-2" />

  {/* Diagonal stripes bar */}
  <div className="w-full max-w-3xl flex flex-row justify-center mt-2">
    <div className="w-full h-4 flex items-center overflow-hidden">
      {/* SVG for diagonal stripes */}
      <svg width="100%" height="16" viewBox="0 0 1000 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="stripes" patternUnits="userSpaceOnUse" width="24" height="16" patternTransform="rotate(-20)">
            <rect x="0" y="0" width="7" height="16" fill="#D1D1D1" />
          </pattern>
        </defs>
        <rect width="1000" height="16" fill="url(#stripes)" />
      </svg>
    </div>
  </div>
</div>
    
  </section>
);

export default PricingSection;