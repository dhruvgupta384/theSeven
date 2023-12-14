import './App.css';
import AboutPage from "./Pages/AboutPage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ServicesPage from "./Pages/ServicesPage";
import Portfolio from "./Pages/Portfolio";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import ProductPage from "./Components/Shop/ProductPage";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Services" element={<ServicesPage/>}/>
            <Route path={"/Portfolio"} element={<Portfolio/>}/>
            <Route path={"/Blogs"} element={<Blogs/>}/>
            <Route path={"/Contact"} element={<Contact/>}/>
            <Route path={"/Shop"} element ={<Shop/>}/>
            <Route path={"/ProductPage"} element ={<ProductPage/>}/>
            <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
