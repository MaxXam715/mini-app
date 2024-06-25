import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {App} from "./App.jsx";
import HomePage from "./pages/Home/Home";
import Profession from "./pages/Profession/Profession";
import ProfessionList from "./pages/Profession/ProfessionList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <HomePage />, index: true
            },
            {
                element: <Profession />, path: "/profession-empty",
            },
            {
                element: <ProfessionList />, path: "/profession-list",
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);