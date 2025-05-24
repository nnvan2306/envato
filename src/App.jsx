import "./App.css";
import Artist from "./components/Artist";
import Banner from "./components/Banner";
import Demo from "./components/Demo";
import Discography from "./components/Discography";
import Easy from "./components/Easy";
import Integration from "./components/Integration";
import Making from "./components/Making";
import NineTemplates from "./components/NineTemplates";
import Save from "./components/Save";
import Sell from "./components/Sell";
import Template from "./components/Template";
import footer from "./assets/footer.jpg";
export default function App() {
    return (
        <>
            <Banner />
            <Template />
            <Integration />
            <Discography />
            <Demo />
            <Artist />
            <Easy />
            <Sell />
            <NineTemplates />
            <Making />
            <Save />
            <img src={footer} alt="footer" />
        </>
    );
}
