import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { axiosInstance } from "./../utils/axiosInstance";
import { toast } from "react-toastify";
import { errorHandle } from "../utils/helpers";
import { logout } from "../redux/authedUser";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.svg";
import arrow from "../assets/images/arrowDown.svg";
import dots from "../assets/images/dots.svg";
import settings from "../assets/images/settings.svg";
import logoutIcon from "../assets/images/logout.svg";

export default function Navbar() {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies(["token", "id"]);
  const navigate = useNavigate();
  const settingMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        settingMenuRef.current &&
        !settingMenuRef.current.contains(event.target) &&
        !event.target.closest(".settingBtn")
      ) {
        setShowSettingsModal(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        !event.target.closest(".user_dropdown")
      ) {
        setShowUserModal(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSettingsToggle = () => {
    setShowSettingsModal(!showSettingsModal);
    if (!showSettingsModal) setShowUserModal(false);
  };

  const handleUserToggle = () => {
    setShowUserModal(!showUserModal);
    if (!showUserModal) setShowSettingsModal(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      if (res.status === 200) {
        removeCookie("token", { path: "/" });
        removeCookie("id", { path: "/" });
        dispatch(logout());
        navigate("/login");
        toast.success("تم تسجيل الخروج بنجاح");
      }
    } catch (error) {
      console.error("Error logging out:", error.message);
      toast.error(errorHandle(error, "حدث خطأ في تسجيل الخروج"));
    }
  };

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
            <span
              className="nav_link settingBtn"
              onClick={handleSettingsToggle}
              aria-expanded={showSettingsModal}
              aria-controls="settingsMenu"
              role="button"
            >
              الاعدادات <img src={arrow} alt="arrow" />
            </span>
            <div
              ref={settingMenuRef}
              id="settingsMenu"
              className={`dropMenu settings ${showSettingsModal ? "show" : ""}`}
            >
              <ul>
                <li>
                  <NavLink
                    className="nav_link"
                    to="/slider-settings"
                    onClick={() => setShowSettingsModal(false)}
                  >
                    <div className="icon">
                      <img src={dots} alt="dots" />
                    </div>
                    <h6>السلايدر</h6>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav_link"
                    to="/account-settings"
                    onClick={() => setShowSettingsModal(false)}
                  >
                    <div className="icon">
                      <img src={settings} alt="settings" />
                    </div>
                    <h6>الإعدادات</h6>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="user_dropdown">
          <div
            className="button_drop"
            onClick={handleUserToggle}
            aria-expanded={showUserModal}
            aria-controls="userMenu"
            role="button"
          >
            <div className="user">
              <img src={user} alt="user" />
              <span className="status"></span>
            </div>
            <span className="user_name">أحمد المكرمي</span>
            <img src={arrow} alt="arrow" />
            <div
              ref={userMenuRef}
              id="userMenu"
              className={`dropMenu ${showUserModal ? "show" : ""}`}
            >
              <ul>
                <li>
                  <NavLink
                    className="nav_link"
                    to="/logout"
                    onClick={() => {
                      setShowUserModal(false), handleLogout();
                    }}
                  >
                    <div className="icon">
                      <img src={logoutIcon} alt="logout" />
                    </div>
                    <h6>تسجيل الخروج</h6>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
