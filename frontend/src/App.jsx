import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/signup" element={<Signup role="user" />} />
          <Route path="/user/signin" element={<Signin role="user" />} />
          <Route path="/admin/signup" element={<Signup role="admin" />} />
          <Route path="/admin/signin" element={<Signin role="admin" />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App;
