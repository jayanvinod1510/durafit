import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Landingpage from "pages/Landingpage";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Listingpage from "pages/Listingpage";
import Naturapedic from "pages/Naturapedic";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "durafit/dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "durafit/",
      element: <Landingpage />,
    },
    {
      path: "durafit/aboutus",
      element: <AboutUs />,
    },
    {
      path: "durafit/contactus",
      element: <ContactUs />,
    },
    {
      path: "durafit/listingpage",
      element: <Listingpage />,
    },
    {
      path: "durafit/naturapedic",
      element: <Naturapedic />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
