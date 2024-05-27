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
    { path: "dhiwise-dashboard", element: <Home key={"home"}/> },
    { path: "*", element: <NotFound key={"notfound"} /> },
    {
      path: "/",
      element: <Landingpage key={"landingpage"} />,
    },
    {
      path: "/aboutus",
      element: <AboutUs key={"aboutus"} />,
    },
    {
      path: "/contactus",
      element: <ContactUs key={"contactus"} />,
    },
    {
      path: "/listingpage",
      element: <Listingpage key={"listing"}/>,
    },
    {
      path: "/mattress",
      element: <Listingpage key={"mattress"} productType={"Mattress"}/>,
    },
    {
      path: "/pillows",
      element: <Listingpage key={"pillows"} productType={"Pillows"}/>,
    },
    {
      path: "/blackedition",
      element: <Listingpage key={"blackedition"} productType={"Black Edition"}/>,
    },
    {
      path: "/details",
      element: <Details key={"details"}/>,
    },
    {
      path: "/cushioning",
      element: <Listingpage key={"cushioning"} productType={"Cushioning"}/>,
    },
  ]);

  return element;
};

export default ProjectRoutes;
