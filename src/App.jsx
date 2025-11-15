import Navbar from "./navbar";
import logo from './assets/download.svg';
import playstore from "./assets/play-store-badge-CSnFBUFT.png";
import appScreen from "./assets/mollet-app-screenshott-kGWzVjZZ.png"
import "./index.css";
import Herosection from "./hero-section";
import Functionalities from "./functionalities";
import Countries from "./countries";
import Howitworks from "./howitworks";
import User from "./user";
import Cta from "./cta";
import Footer from "./footer";
export default function App()
{
  return(
    <>
        <Navbar/>
        <main className="py-[72px] flex flex-col gap-10">
           <Herosection/>
           <Functionalities/>
           <Countries/>
           <Howitworks/>
           <User/>
           <Cta/>
        </main>
        <Footer/>
    </>
  );
}