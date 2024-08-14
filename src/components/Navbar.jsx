import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.svg";
import arrow from "../assets/images/arrowDown.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav_menu">
          <li>
            <NavLink className="nav_link" to="/">
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/lotteries">
              قائمة القرعات
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/investors">
              بيانات المساهمين
            </NavLink>
          </li>
          <li>
            <span className="nav_link">
              الاعدادات <img src={arrow} alt="arrow" />
            </span>
          </li>
        </ul>
        <div className="user_dropdown">
          <div className="user">
            <img src={user} alt="user" />
            <span className="status"></span>
          </div>
          <span className="user_name">أحمد المكرمي</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </nav>
  );
}
