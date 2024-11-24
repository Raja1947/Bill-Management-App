import { useRoutes } from "react-router-dom";
import MainRoutes from "./mainRoutes";
import AuthRoutes from "./authRoutes";

export default function AppRoutes(){
    return useRoutes([
        MainRoutes,AuthRoutes
    ])
}