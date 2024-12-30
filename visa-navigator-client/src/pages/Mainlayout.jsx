import Lottie from "lottie-react";
import { Outlet } from "react-router-dom";
import backgroundAnimation from "../assets/Background.json";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Fonts.css";

const Mainlayout = () => {
  return (
    <div className="roboto-main    bg-no-repeat">
      <Navbar></Navbar>
      <Lottie
        className="absolute   w-full h-full z-[-1]"
        animationData={backgroundAnimation}
      ></Lottie>
      <div className="relative z-[1] min-h-[calc(100vh-292px)]  container mx-auto px-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
