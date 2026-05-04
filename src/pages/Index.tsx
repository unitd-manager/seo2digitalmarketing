import Header from "@/components/Header";
import Footer from "@/components/Footer";
import V2HeroSection from "@/components/v2/V2HeroSection";
import V2TruthSection from "@/components/v2/V2TruthSection";
import V2InfrastructureSection from "@/components/v2/V2InfrastructureSection";
import V2CostOfDelaySection from "@/components/v2/V2CostOfDelaySection";
import V2FrameworkSection from "@/components/v2/V2FrameworkSection";
import V2ServicesSection from "@/components/v2/V2ServicesSection";
import V2TestimonialsSection from "@/components/v2/V2TestimonialsSection";
import V2TwoPathsSection from "@/components/v2/V2TwoPathsSection";
import V2FinalCTASection from "@/components/v2/V2FinalCTASection";

const LandingPage2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <V2HeroSection />
        <V2TruthSection />
        <V2InfrastructureSection />
        <V2CostOfDelaySection />
        <V2FrameworkSection />
        <V2ServicesSection />
        <V2TestimonialsSection />
        <V2TwoPathsSection />
        <V2FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage2;
