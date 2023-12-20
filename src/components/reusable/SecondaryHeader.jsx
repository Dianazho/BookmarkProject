import "./reusable.scss";

function SecondaryHeader({ children, text }) {
  return (
    <h2 className={`secondaryHeader ${text ? "white" : ""}`}>{children}</h2>
  );
}

export default SecondaryHeader;
