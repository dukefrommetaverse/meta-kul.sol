//Components
import Hero from "../components/hero";
import HomeScreenCard from "../components/homeScreenCard";
import HomeSectionLaunchPad from "../components/homeSectionLaunchPad";

//SEO
import SEO from "../components/seo/SEO";

//Data
import { allCardsData } from "../components/data/allCardsData";

export default function Home() {
  return (
    <div>
      <SEO />
      <Hero />
     
      <HomeSectionLaunchPad />
    </div>
  );
}
