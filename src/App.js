import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Forgotpassword from "./Componets/Forgotpassword";
import Signup from "./Pages/Signup";
import Dashbord from "./Pages/Dashbord";
import Setting from "./Pages/Setting";
import Profile from "./Pages/Profile";
import Sidebar2 from "./Componets/Sidebar2";
import Tables from "./Pages/Tables";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar2>
          <Routes>
            {/* Home Routes */}
            <Route path="/" element={<Dashbord />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/order_history" element={<Profile />} />
            <Route path="/table" element={<Tables/>}/>

            <Route path="/login" element={<Login />}>
              <Route path="forgot_password" element={<Forgotpassword />} />
            </Route>
            <Route path="/signup" element={<Signup />} />

            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </Sidebar2>
      </BrowserRouter>
    </div>
  );
}

export default App;
