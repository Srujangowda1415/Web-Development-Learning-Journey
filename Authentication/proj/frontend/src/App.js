import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotpassword";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotpwd" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
};

export default App;
