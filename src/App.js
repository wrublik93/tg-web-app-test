import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import AboutUs from "./components/AboutUs/AboutUs";
import Details from "./components/Details/Details";

function App() {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);


  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<ProductList />} />
            <Route path={"about-us"} element={<AboutUs />} />
            <Route path={"/:id"} element={<Details />} />
        </Routes>
    </div>
  );
}

export default App;
