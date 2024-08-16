import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authedUser";
import InputField from "../ui/InputField";
import logo from "../assets/images/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", formData, {
        withCredentials: true
      });
      toast.success("تم تسجيل الدخول بنجاح");
      dispatch(setUser(res.data.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("اسم المستخدم او كلمة المرور غير صحيحة");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login">
      <div className="login_form">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>مرحباً بعودتك 👋</h1>
        <form className="form_ui" onSubmit={handleSubmit}>
          <InputField
            label="اسم المستخدم"
            placeholder="ادخل اسم المستخدم"
            type="text"
            name="username"
            id="username"
            required
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <InputField
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
            type="password"
            name="password"
            id="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div className="input-field">
            <button
              style={{ opacity: loading ? 0.7 : 1 }}
              disabled={loading}
              type="submit"
              className="submit"
            >
              تسجيل الدخول{" "}
              <i className={loading ? "fa-solid fa-spinner fa-spin" : ""} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
