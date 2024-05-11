import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import WrongRoute from "./WrongRoute";
import Home from "../Pages/Home/Home";
import AllBooks from "../Pages/Books/AllBooks";
import EntryNewBook from "../Pages/Books/EntryNewBook";
import UpdateBook from "../Pages/Books/UpdateBook";
import AboutUs from "../Pages/AboutUs";
import BookDetails from "../Pages/Books/BookDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allBooks",
                element: <AllBooks></AllBooks>
            },
            {
                path: "/entryNewBook",
                element: <EntryNewBook></EntryNewBook>
            },
            {
                path: "/updateBook/:id",
                element: <UpdateBook></UpdateBook>
            },
            {
                path: "/book/:id",
                element: <BookDetails />
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },

        ]
    },
    {
        path: "*",
        element: <WrongRoute></WrongRoute>
    }
]);

export default Router;