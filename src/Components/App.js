import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./src/Components/Header";
import AppLayout from "./AppLayout";

// const HeaderElement = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { id: "heading1", key: "h1" }, "Heading1"),
//   React.createElement("h2", { id: "heading2", key: "h2" }, "Heading2"),
//   React.createElement("h3", { id: "heading3", key: "h3" }, "Heading3"),
// ]);

const TitleComponent = () => {
  return <h2>Namaste React.</h2>;
};

const NestedHeader = ({ tag }) => {
  return (
    <div className="title">
      <h1>{tag}</h1>
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {/* <h2>Heading2</h2>
    <h3>Heading3</h3> */}
    </div>
  );
};

// const JsxHeading = () => {
//   return <h1 id="heading">Hello Namaste React</h1>;
// };

// const app = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Welcome to React Classes."
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NestedHeader tag={"Hello React World"} />);
root.render(<AppLayout />);
