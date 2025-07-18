import { Outlet } from "react-router";
import NavBar from "./navbar";
import Footer from "./Footer";

const Body = ()=>{
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Body;