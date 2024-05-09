import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import AddJob from "../pages/AddJob";
import BidRequests from "../pages/BidRequests";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import Login from "../pages/Login";
import MyBids from "../pages/MyBids";
import MyPostedJobs from "../pages/MyPostedJobs";
import Registration from "../pages/Registration";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path: '/my-bids',
                element:
                    <PrivateRoute>
                        <MyBids />
                    </PrivateRoute>

            },
            {
                path: '/bid-requests',
                element:
                    <PrivateRoute>
                        <BidRequests />
                    </PrivateRoute>

            }
        ]
    },
]);

export default router;