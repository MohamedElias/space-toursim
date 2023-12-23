import { Outlet, useLocation } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import './Root.css'
const RootLayout =()=>{
   const location = useLocation();
return<div className={`background + ${location.pathname.replace(/^\/|\/$/g, "")}`}>
<MainNavigation></MainNavigation>
<Outlet></Outlet>
</div>
}
export default RootLayout