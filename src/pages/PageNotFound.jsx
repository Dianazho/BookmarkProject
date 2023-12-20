import WarningPage from "../components/reusable/WarningPage";

function PageNotFound() {
  return (
    <WarningPage
      warning={{
        header: "The page you requested could not be found",
        image: "/notfound.svg",
      }}
    />
  );
}

export default PageNotFound;
