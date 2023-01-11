import { Outlet } from "react-router-dom";
import NavBar from "./HeaderComponent/NavBar";
import Footer from "./FooterComponent/Footer";

export default function Layout() {
    return(
        <div>
            <NavBar />
                <Outlet />
            <Footer />
        </div>
    )
}