import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer";
import NavBar from "../pages/Home/Home/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;