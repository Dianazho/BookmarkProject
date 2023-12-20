import { useState } from "react";
import Feature from "../components/Feature";
import "./Carousel.scss";

const features = [
  {
    id: 0,
    feature: "Simple Bookmarking",
    header: "Bookmark in one click",
    text: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
  },
  {
    id: 1,
    feature: "Speedy Searching",
    header: "Share your bookmarks",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 2,
    feature: "Easy Sharing",
    header: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
function Carousel() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div>
      <div className="flex column center">
        <ul className="featureWrapper flex gap-4">
          {features.map((feature) => (
            <li key={feature.id} onClick={() => setSelectedFeature(feature.id)}>
              <p
                className={`feature + ${
                  feature.id === selectedFeature ? "featureSelected" : ""
                }`}
              >
                {feature.feature}
              </p>
            </li>
          ))}
        </ul>

        {features.map(
          (feature) =>
            feature.id === selectedFeature && (
              <Feature
                key={feature.id}
                feature={feature}
                selectedFeature={selectedFeature}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Carousel;
