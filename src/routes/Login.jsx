import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.svg";
import InputField from "../ui/InputField";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      console.log(res.data);
    } catch (error) {
      toast.error(error.response.data.message);
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
              تسجيل الدخول
              <i className={loading ? "fa-solid fa-spinner fa-spin" : ""} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
