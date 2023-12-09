import "./App.css";
import { Routes, Route } from "react-router-dom";

import Verification from "./components/OTP";
import Sigin from "./components/Signin";
import Song from "./components/Song";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/song" element={<Song />} />
      </Routes>
    </>
  );
}

export default App;
