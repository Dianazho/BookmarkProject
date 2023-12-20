import NumberAnimation from "../components/NumberAnimation";
import SecondaryHeader from "../components/reusable/SecondaryHeader";
import EmailVerification from "../components/EmailVerification";
import "./NewsletterSection.scss";

function NewsletterSection() {
  return (
    <section className="newslatterSection flex center column">
      <NumberAnimation />

      <SecondaryHeader text="white">
        Stay up-to-date with what we&apos;re doing
      </SecondaryHeader>
      <EmailVerification />
    </section>
  );
}

export default NewsletterSection;
