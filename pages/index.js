import About from "@/components/landing/About";
import Banner from "@/components/landing/Banner";
import ContactBanner from "@/components/landing/ContactBanner";
import SocialModal from "@/components/SocialModal";

export default function Home() {
  return (
    <div className="container mx-auto px-8 lg:px-0">
      <Banner />
      <SocialModal buttons={["github"]} />
      <About />
      <SocialModal buttons={["linkedin"]} />
      <ContactBanner />
    </div>
  );
}
