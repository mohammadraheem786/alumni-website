import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import WelcomeSection from "./sections/WelcomeSection";
import MembershipBenefits from "./sections/MembershipBenefits";
import CTASection from "./sections/CTASection"; // don’t forget this one
import Footer from "./components/Footer";
import PricingSection from "./sections/PricingSection";

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-[80px]"> 
        {/* Add top padding so content doesn't hide behind sticky navbar */}
        <HeroSection />

        <div className="space-y-16">
          <WelcomeSection />
          <MembershipBenefits />
          {/* <CTASection /> */}
          <PricingSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>


  );
}

export default App;
