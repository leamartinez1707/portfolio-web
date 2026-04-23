import { createBrowserRouter } from "react-router-dom";
import NewLanding from "../components/NewLanding";

const router = createBrowserRouter([
    {
        path: "/",
        Component: NewLanding,
    },
]);

export default router;
