import WarningPage from "../components/reusable/WarningPage";

function UnderConstruction() {
  return (
    <WarningPage
      warning={{
        header: "Whoops! Page under construction",
        image: "/underconstruction.svg",
      }}
    />
  );
}

export default UnderConstruction;
