import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeadlineBanner from "@/components/HeadlineBanner";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CurrentInventory from "@/components/CurrentInventory";
import NotableSale from "@/components/NotableSale";
import Communities from "@/components/Communities";
import RecentBlogs from "@/components/RecentBlogs";
import BlogCards from "@/components/BlogCards";
import WorkWithSpacezad from "@/components/WorkWithSpacezad";
import StayUpdated from "@/components/StayUpdated";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HeadlineBanner />
      <About />
      <Stats />
      <CurrentInventory />
      <NotableSale />
      <Communities />
      <RecentBlogs />
      <BlogCards />
      <WorkWithSpacezad />
      <StayUpdated />
      <Footer />
    </main>
  );
};

export default Index;
