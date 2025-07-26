import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./Components/AppLayout";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

// import Header from "./src/Components/Header";
// const HeaderElement = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { id: "heading1", key: "h1" }, "Heading1"),
//   React.createElement("h2", { id: "heading2", key: "h2" }, "Heading2"),
//   React.createElement("h3", { id: "heading3", key: "h3" }, "Heading3"),
// ]);

// const TitleComponent = () => {
//   return <h2>Namaste React.</h2>;
// };

// const NestedHeader = ({ tag }) => {
//   return (
//     <div className="title">
//       <h1>{tag}</h1>
//       {TitleComponent()}
//       <TitleComponent />
//       <TitleComponent></TitleComponent>
//       {/* <h2>Heading2</h2>
//     <h3>Heading3</h3> */}
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
