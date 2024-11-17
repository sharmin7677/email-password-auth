import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const MainLayOut = () => {
    return (
        <div className="max-w-5xl  mx-auto">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;