import { NavLink } from "react-router-dom";
import Section from "../components/reusable/Section";
import SecondaryHeader from "../components/reusable/SecondaryHeader";
import MainText from "../components/reusable/MainText";
import Question from "../components/Question";
import BtnCTA from "../components/reusable/BtnCTA";
import "./FAQSection.scss";

const questions = [
  {
    question: "What is Bookmark?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
];

function FAQSection() {
  return (
    <Section>
      <div className="maxWidth column">
        <div className="FAQTextWrapper">
          <SecondaryHeader>Frequently Asked Questions</SecondaryHeader>
          <MainText>
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </MainText>
          <ul className="questionsList">
            {questions.map((question, i) => (
              <Question key={i} question={question} />
            ))}
          </ul>
          <NavLink to="/construction">
            <BtnCTA color="purple">More info</BtnCTA>
          </NavLink>
        </div>
      </div>
    </Section>
  );
}

export default FAQSection;
