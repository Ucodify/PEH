import React from "react";
import Home from "./Home/Home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
import Lawyers from "./components/Lawyers.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Service from "./Service/Service.jsx";
import About from "./About/About.jsx";
import Lawyer from "./Lawyers/Lawyer.jsx";
import DetailsPage from "./components/Profile.jsx";
import Cards from "./components/Cards.jsx";
import Logout from "./components/Logout.jsx";
import ProfileDetails from "./LawyerProfile/ProfileDetails.jsx";
import LiveChat from "./components/LiveChat.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white font-sans font-bold">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lawyers"
            element={authUser ? <Lawyers /> : <Navigate to="/signup" />}
          />
          <Route path="" />
          <Route path="/signup" className="text-success" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/profile" element={<ProfileDetails />} />
          <Route path="/livechat/:id" element={<LiveChat />}></Route>
        </Routes>

        <Toaster />
        <Footer />
      </div>
    </>
  );
}

export default App;
