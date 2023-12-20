import "./reusable.scss";

function BtnCTA({ children, color }) {
  return <button className={`btnCTA + ${color}`}>{children}</button>;
}

export default BtnCTA;
