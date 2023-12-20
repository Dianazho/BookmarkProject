import Section from "../components/reusable/Section";
import SecondaryHeader from "../components/reusable/SecondaryHeader";
import MainText from "../components/reusable/MainText";
import Carousel from "../components/Carousel";

import "./FeaturesSection.scss";
function FeaturesSection() {
  return (
    <Section>
      <div className="maxWidth column marginBottom">
        <div className="featuresTextWrapper">
          <SecondaryHeader>Features</SecondaryHeader>
          <MainText>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </MainText>
        </div>
      </div>
      <Carousel />
    </Section>
  );
}

export default FeaturesSection;
