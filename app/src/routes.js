import {ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, STORE_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Store from "./pages/Store";
import ItemPage from "./pages/ItemPage";
import Home from "./pages/Home";

export const authRoutes=[
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path: BASKET_ROUTE,
        Component:Basket
    }

]
export const publicRoutes=[
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:HOME_ROUTE,
        Component:Home
    },
    {
        path:ITEM_ROUTE + '/:id',
        Component:ItemPage
    },
    {
        path:STORE_ROUTE,
        Component:Store
    }


]