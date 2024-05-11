import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import WrongRoute from "./WrongRoute";
import Home from "../Pages/Home/Home";
import AllBooks from "../Pages/Books/AllBooks";
import EntryNewBook from "../Pages/Books/EntryNewBook";
import UpdateBook from "../Pages/Books/UpdateBook";
import AboutUs from "../Pages/AboutUs";
import BookDetails from "../Pages/Books/BookDetails";
import AllAuthor from "../Pages/Authors/AllAuthor";
import EntryNewAuthor from "../Pages/Authors/EntryNewAuthor";
import UpdateAuthor from "../Pages/Authors/UpdateAuthor";
import AuthorDetails from "../Pages/Authors/AuthorDetails";
import AllPublisher from "../Pages/Publishers/AllPublisher";
import EntryNewPublisher from "../Pages/Publishers/EntryNewPublisher";
import UpdatePublisher from "../Pages/Publishers/UpdatePublisher";
import PublisherDetails from "../Pages/Publishers/PublisherDetails";

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
                path: "/allAuthors",
                element: <AllAuthor></AllAuthor>
            },
            {
                path: "/entryNewAuthor",
                element: <EntryNewAuthor></EntryNewAuthor>
            },
            {
                path: "/updateAuthor/:id",
                element: <UpdateAuthor></UpdateAuthor>
            },
            {
                path: "/author/:id",
                element: <AuthorDetails></AuthorDetails>
            },


            {
                path: "/allPublishers",
                element: <AllPublisher></AllPublisher>
            },
            {
                path: "/entryNewPublisher",
                element: <EntryNewPublisher></EntryNewPublisher>
            },
            {
                path: "/updatePublisher/:id",
                element: <UpdatePublisher></UpdatePublisher>
            },
            {
                path: "/publisher/:id",
                element: <PublisherDetails></PublisherDetails>
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