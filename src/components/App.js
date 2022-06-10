import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../assets/globalStyles/globalStyle";
import Header from "./Header";
import Ranking from "./Ranking";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
