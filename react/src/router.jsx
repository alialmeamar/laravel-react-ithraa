
import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import Login from "./components/views/Login.jsx";
import NofoundPage from "./components/Nofound.jsx";
import Signup from "./components/views/Signup.jsx";
// eslint-disable-next-line no-unused-vars
import Dashboard from "./components/dashboard.jsx";
import User from "./components/mainlayout/userlayout.jsx";
import Gest from "./components/mainlayout/gest.jsx";
import MainPGCol from "./components/views/MainPGcol.jsx";
import Pageview from "./pagelayout/pageview.jsx";
import Proposal from "./pagelayout/Proposal.jsx";
import Allrequests from "./pagelayout/Allrequests.jsx";
import Firtpage from "./pagelayout/firtpage.jsx";

const router = createBrowserRouter([
    {
        path: '/', element: <User />,
        children: [
            // { path: '/dashboard', element: <Dashboard /> },
            // { path: '/user', element: <Users /> }
            { path: '/', element: <MainPGCol /> },
            { path: '/pageview', element: <Pageview /> },
            { path: '/Proposal', element: <Proposal /> },
            { path: '/Allrequests', element: <Allrequests /> },
            { path: '/f', element: <Firtpage /> },



        ]
    },
    {
        path: '/', element: <Gest />,
        children: [
            { path: '/login', element: <Login />, },
            { path: '/Signup', element: <Signup /> }
        ]
    },


    {

        path: '*', element: <NofoundPage />
    },
]);


export default router;
