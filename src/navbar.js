import { Outlet, Link } from "react-router-dom";
import Sidebar from "./sidebar"
import { FaBeer } from "react-icons/fa";
function Navbar() {
    return (
        <><div className="navbar">
            <ul style={{ textAlign: 'center' }}>
                <li>
                    <Link to="user">User</Link>
                </li>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className="sidebar">
        <Link to="user">User</Link>
            <a href="#">Link 2</a>
            <a href="#">  <h3>
      <FaBeer />?
    </h3></a>
        </div>
        <div className="content">
                <Outlet />
        </div></>
    )
}
export default Navbar