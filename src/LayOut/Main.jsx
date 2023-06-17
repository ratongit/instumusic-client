import { Outlet } from "react-router-dom";
import Navber from "../Components/Shared/Navber/Navber";
import Footer from "../Components/Shared/Fotter/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            
            <div className="pt-9">
            <Outlet></Outlet>
            </div>
           <Footer></Footer>

        </div>
    );
};

export default Main;