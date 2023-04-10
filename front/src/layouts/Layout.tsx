import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import User from "pages/user/User";
import Header from "./header/Header";
import Footer from "./footer/Footer"
import NoPage from "../pages/nopage/NoPage";

function Layout() {
  return (
    <div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;