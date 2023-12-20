import { useEffect, useState } from "react";
import MainNav from "../sections/MainNav";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import ExtentionsSection from "../sections/ExtensionsSection";
import FAQSection from "../sections/FAQSection";
import NewsletterSection from "../sections/NewsletterSection";
import Footer from "../sections/Footer";
import PopUp from "../components/PopUp";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const hidePopupHandler = () => setShowPopUp(false);
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      if (event.clientY <= 5) {
        setShowPopUp(true);
      }
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 30000);
    // I will be deleted while component is unmounting.
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopUp && <PopUp onHidePopupHandler={hidePopupHandler} />}
      <MainNav />
      <HeroSection />
      <FeaturesSection />
      <ExtentionsSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
