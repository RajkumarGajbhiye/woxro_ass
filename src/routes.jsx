import ContactUs from "./page/ContactUs";
import Home from "./page/Home";
import Services from "./page/Services";

const routes =[
    {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
]

export default routes;