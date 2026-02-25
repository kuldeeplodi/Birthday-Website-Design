import { FloatingParticles } from "./components/FloatingParticles";
import { HeroSection } from "./components/HeroSection";
import { TimelineSection } from "./components/TimelineSection";
import { ReasonsSection } from "./components/ReasonsSection";
import { GallerySection } from "./components/GallerySection";
import { SecretMessageSection } from "./components/SecretMessageSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingParticles />
      
      <HeroSection />
      <TimelineSection />
      <ReasonsSection />
      <GallerySection />
      <SecretMessageSection />
      <Footer />
    </div>
  );
}
