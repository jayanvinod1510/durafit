import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Landingpage from "pages/Landingpage";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Listingpage from "pages/Listingpage";
import Details from "pages/Details";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "listingpage",
      element: <Listingpage/>,
    },
    {
      path: "mattress",
      element: <Listingpage productType={"Mattress"}/>,
    },
    {
      path: "pillows",
      element: <Listingpage productType={"Pillows"}/>,
    },
    {
      path: "blackedition",
      element: <Listingpage productType={"Black Edition"}/>,
    },
    {
      path: "details",
      element: <Details />,
    },
    {
      path: "cushioning",
      element: <Listingpage productType={"Cushioning"}/>,
    },
  ]);

  return element;
};

export default ProjectRoutes;
