import "./style/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";

import Services from "components/Services";
import ServicesSlider from "components/ServicesSlider";
import ReachUs from "components/ReachUs";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/contact",
          element: <ReachUs />,
        },
        {
          path: "/services",
          element: (
            <>
              <Services />
              <ServicesSlider />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
