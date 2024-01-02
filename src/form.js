import UserRegister from "./userRegister";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function AdminPanel() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="test" element={<Layout />}>
                    <Route path="user" element={<UserRegister />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }

  export default AdminPanel;
