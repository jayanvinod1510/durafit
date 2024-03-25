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
      element: <Listingpage />,
    },
    {
      path: "naturapedic",
      element: <Naturapedic />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
