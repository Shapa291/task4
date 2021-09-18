import { LOGIN_ROUTE, TABLE_ROUTE } from "../utils/consts";
import Login from "./Login";
import Table from "./Table";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: TABLE_ROUTE,
        Component: Table
    }
]