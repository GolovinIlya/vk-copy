import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { MainPage } from "pages/MainPage";
import { Navbar } from "widgets/Navbar";
import { Footer } from "widgets/Footer/ui/Footer";
import PromoPage from "pages/PromoPage/ui/PromoPage";

const App = () => {
    return (
        <div className={"app"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/promo"} element={<PromoPage />} />
                </Routes>
                <Footer />
            </Suspense>
        </div>
    );
};

export default App;
