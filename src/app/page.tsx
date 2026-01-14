import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustSection from "@/components/TrustSection/TrustSection";
import Articles from "@/components/Articles/Articles";
import FAQ from "@/components/FAQ/FAQ";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Articles />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
