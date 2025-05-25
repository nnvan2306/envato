import { useEffect } from "react";
import "./App.css";
import Artist from "./components/Artist";
import Banner from "./components/Banner";
import Demo from "./components/Demo";
import Discography from "./components/Discography";
import Easy from "./components/Easy";
import FadeInUpBox from "./components/FadeInUp/FadeInUp";
import Features from "./components/Features";
import Header from "./components/Header";
import Integration from "./components/Integration";
import Making from "./components/Making";
import NineTemplates from "./components/NineTemplates";
import Save from "./components/Save";
import Sell from "./components/Sell";
import Template from "./components/Template";

export default function App() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <div className="wrapper_app">
            <Header />
            <Banner />
            <Template />
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Integration />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Discography />
            </FadeInUpBox>{" "}
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Demo />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Artist />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Easy />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Sell />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <NineTemplates />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Features />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Making />
            </FadeInUpBox>
            <FadeInUpBox duration={0.5} ease={"easeIn"}>
                <Save />
            </FadeInUpBox>
            <div className="footer_wrapper">
                <FadeInUpBox duration={0.5} ease={"easeIn"}>
                    <h2>
                        HERION
                        <br />
                        THEME
                        <br />
                        <button>BUY NOW</button>
                    </h2>
                </FadeInUpBox>
            </div>
        </div>
    );
}
