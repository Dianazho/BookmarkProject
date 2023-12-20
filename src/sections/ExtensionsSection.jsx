import Section from "../components/reusable/Section";
import SecondaryHeader from "../components/reusable/SecondaryHeader";
import MainText from "../components/reusable/MainText";
import Card from "../components/Card";
import "./ExtensionsSection.scss";

const cardsInfo = [
  {
    cardId: 0,
    browserName: "Chrome",
    minVersion: 62,
    imgPath: "/logo-chrome.svg",
    btnColor: "purple",
  },
  {
    cardId: 1,
    browserName: "Firefox",
    minVersion: 55,
    imgPath: "/logo-firefox.svg",
    btnColor: "purple",
  },
  {
    cardId: 2,
    browserName: "Opera",
    minVersion: 46,
    imgPath: "/logo-opera.svg",
    btnColor: "purple",
  },
];

function ExtentionsSection() {
  return (
    <Section>
      <div className="maxWidth column">
        <div className="extensionsTextWrapper">
          <SecondaryHeader>Download the extension</SecondaryHeader>
          <MainText>
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize.
          </MainText>
        </div>
        <div className="flex gap-3 marginTop cardsWrapper">
          {cardsInfo.map((card) => (
            <Card key={card.cardId} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ExtentionsSection;
